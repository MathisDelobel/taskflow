import List from "../List/List.jsx"
import {useBoardContext} from "../../contexts/BoardContext/BoardContext.jsx";

export default function Board() {

  const {board} = useBoardContext();

  if (!board) {
    return <div className="info has-text-white"> Chargement...</div>;
  }

  return (
    <>
      {board.lists.map((list) => (
        <List key={list.id} list={list}/>
      ))}
    </>
  );
}
