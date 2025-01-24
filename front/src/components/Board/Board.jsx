import List from '../List/List';

export default function Board({ board }) {
  if (!board.lists) {
    return <div className="info has-text-white"> Chargement...</div>;
  }

  return (
    <>
      {board.lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </>
  );
}
