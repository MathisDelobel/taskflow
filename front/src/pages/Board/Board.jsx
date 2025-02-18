import { useParams } from "react-router";
import Board from "../../components/Board/Board.jsx";
import {BoardProvider} from "../../contexts/BoardContext/BoardContext.jsx";
import {useState} from "react";
import CreateListModal from "../../components/Modals/CreateListModal/CreateListModal.jsx";

export default function BoardPage() {
	const { id } = useParams();
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<BoardProvider boardId={id}>
		<div className="container">
			<h1 className="title has-text-centered mt-5 has-text-white">
				Board
			</h1>
			<button onClick={()=>{setIsModalOpen(true)}} type="button" className="button is-primary">
				Ajouter une liste
			</button>
			<div className="columns mt-5">
				<Board />
			</div>
		</div>


		<CreateListModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />

		</BoardProvider>
	);
}
