import { useParams } from "react-router";
import Board from "../../components/Board/Board.jsx";
import {BoardProvider} from "../../contexts/BoardContext/BoardContext.jsx";

export default function BoardPage() {
	const { id } = useParams();

	return (
		<BoardProvider boardId={id}>
		<div className="container">
			<h1 className="title has-text-centered mt-5 has-text-white">
				Board
			</h1>
			<button type="button" className="button is-primary">
				Ajouter une liste
			</button>
			<div className="columns mt-5">
				<Board />
			</div>
		</div>
		</BoardProvider>
	);
}
