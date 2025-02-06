import List from "../List/List.jsx"

export default function Board({ board, onAddCard }) {

  if (!board.lists) {
    return <div className="info has-text-white"> Chargement...</div>;
  }

  return (
    <>
      {board.lists.map((list) => (
        <List key={list.id} list={list} onAddCard={onAddCard} />
      ))}
    </>
  );
}
