import { createContext, useContext, useState, useEffect } from 'react';
import boardApi from '../../services/api/board.js';

const BoardContext = createContext(undefined);

export const BoardProvider = ({ children, boardId }) => {
  const [board, setBoard] = useState(null);

  // Fetch initial board data
  useEffect(() => {
    boardApi.getOneBoard(boardId).then(setBoard);
  }, [boardId]);

  // Fonction de mise à jour du board
  const updateBoard = (updatedBoard) => {
    setBoard((prevBoard) => {
      if (!prevBoard) return updatedBoard;

      return {
        ...prevBoard, // Garder les données existantes du board
        title: updatedBoard.title, // Mettre à jour uniquement le titre
      };
    });
  };

  // Mettre à jour une liste (ex: titre)
  const updateList = (listId, updatedFields) => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      lists: prevBoard.lists.map((list) =>
        list.id === listId ? { ...list, ...updatedFields } : list,
      ),
    }));
  };

  //ajouter une liste a un board
  const addListToBoard = (newList) => {
    setBoard((prevBoard) => {
      if (!prevBoard) return { lists: [newList] }; // Cas où `prevBoard` est `null`

      return {
        ...prevBoard,
        lists: prevBoard.lists ? [...prevBoard.lists, newList] : [newList], // Vérifie toujours lists
      };
    });
  };

  // Ajouter une carte à une liste
  const addCardToList = (listId, newCard) => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      lists: prevBoard.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: list.cards ? [...list.cards, newCard] : [newCard],
            } // Vérification et initialisation
          : list,
      ),
    }));
  };

  // Mettre à jour une carte
  const updateCardModal = (listId, cardId, updatedFields) => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      lists: prevBoard.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: list.cards.map((card) =>
                card.id === cardId ? { ...card, ...updatedFields } : card,
              ),
            }
          : list,
      ),
    }));
  };

  return (
    <BoardContext.Provider
      value={{
        board,
        addCardToList,
        updateCardModal,
        addListToBoard,
        updateBoard,
        updateList,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export function useBoardContext() {
  return useContext(BoardContext);
}
