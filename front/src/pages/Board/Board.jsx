import { useParams } from "react-router";
import Board from "../../components/Board/Board.jsx";
import {BoardProvider} from "../../contexts/BoardContext/BoardContext.jsx";

export default function BoardPage() {
	const { id } = useParams();

	return (
		<BoardProvider boardId={id}>

			<Board />

		</BoardProvider>
	);
}
