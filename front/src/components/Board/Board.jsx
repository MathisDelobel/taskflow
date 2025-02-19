import List from "../List/List.jsx";
import { useBoardContext } from "../../contexts/BoardContext/BoardContext.jsx";
import { useState } from "react";
import CreateListModal from "../Modals/CreateListModal/CreateListModal.jsx";
import EditableTitleUpdateBoard from "../EditableTitle/UpdateBoard/EditableTitleUpdateBoard.jsx";

export default function Board() {
	const { board } = useBoardContext();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	if (!board) {
		return <div className="info has-text-white"> Chargement...</div>;
	}

	return (
		<>
			<div className="container is-overflow-x-scroll is-clipped">
				<h1
					className="title has-text-centered mt-5 has-text-white"
					onClick={() => setIsEditing(true)}
					onKeyUp={(e) =>
						(e.key === "Enter" || e.key === " " || e.key === "Escape") &&
						setIsModalOpen(true)
					}
				>
					{isEditing ? (
						<EditableTitleUpdateBoard setIsEditing={setIsEditing} />
					) : (
						board.title
					)}
				</h1>

				<button
					onClick={() => {
						setIsModalOpen(true);
					}}
					type="button"
					className="button is-primary"
				>
					Ajouter une liste
				</button>
				<div className="columns mt-5">
					{board.lists &&
						board.lists.length > 0 &&
						board.lists.map((list) => <List key={list.id} list={list} />)}
				</div>
			</div>

			<CreateListModal
				setIsModalOpen={setIsModalOpen}
				isModalOpen={isModalOpen}
			/>
		</>
	);
}
