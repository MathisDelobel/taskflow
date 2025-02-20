import { useState, useRef, useEffect } from 'react';
import { useBoardContext } from '../../../contexts/BoardContext/BoardContext';
import boardApi from '../../../services/api/board';

export default function EditableTitleUpdateBoard({ setIsEditing }) {
  const { board } = useBoardContext();
  const [boardTitle, setBoardTitle] = useState(board.title);
  const inputRef = useRef(null);
  const { updateBoard } = useBoardContext();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleUpdateTitle = () => {
    // Mettre à jour le board via l'API
    boardApi
      .updateBoard(board.id, { title: boardTitle, user_id: board.user_id })
      .then((response) => {
        if (response.id) {
          // Mettre à jour le contexte avec le titre modifié
          updateBoard({ title: boardTitle });
        }
      });
  };

  const handleBlurOrEnter = (e) => {
    if (e.type === 'blur' || e.key === 'Enter') {
      if (boardTitle.trim() !== board.title) {
        handleUpdateTitle();
      } else {
        setIsEditing(false);
      }
      setIsEditing(false);
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      className="input"
      value={boardTitle}
      onChange={(e) => setBoardTitle(e.target.value)}
      onBlur={handleBlurOrEnter}
      onKeyDown={handleBlurOrEnter}
      aria-label="Nom du board"
    />
  );
}
