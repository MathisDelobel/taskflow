import boardApi from "../../services/api/board.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Board from "../../components/Board/Board.jsx";

export default function BoardPage() {
	const [board, setBoard] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		boardApi.getOneBoard(id).then((board) => {
			setBoard(board);
		});
	}, []);

	if (!board)
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);

	return (
		<div className="container">
			<h1 className="title has-text-centered mt-5 has-text-white">
				{board.title}
			</h1>
			<button type="button" className="button is-primary">
				Ajouter une liste
			</button>
			<div className="columns mt-5">
				<Board board={board} />
			</div>
		</div>
	);
}
