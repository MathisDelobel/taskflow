import { useState, useRef, useEffect } from "react";
import { useBoardContext } from "../../../contexts/BoardContext/BoardContext.jsx";
import cardApi from "../../../services/api/card.js";
import { toast } from "react-toastify";

export default function EditableTitleCreateCard({ list, setIsAdding }) {
	const [title, setTitle] = useState("");
	const inputRef = useRef(null);
	const { addCardToList } = useBoardContext();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleSaveCard = (title) => {
		const data = { list_id: list.id, title };
		cardApi.createCard(data).then((response) => {
			if (response.id) {
				toast.success("Création de la carte réussie");
				addCardToList(list.id, response);
			}
		});
		setIsAdding(false);
	};

	const handleBlurOrEnter = (e) => {
		if (e.type === "blur" || e.key === "Enter") {
			if (title.trim()) {
				handleSaveCard(title);
				addCardToList(title);
			} else {
				setIsAdding(false);
			}
		}
	};

	return (
		<input
			ref={inputRef}
			type="text"
			className="input"
			placeholder="Nom de la carte"
			value={title}
			onChange={(e) => setTitle(e.target.value)}
			onBlur={handleBlurOrEnter}
			onKeyDown={handleBlurOrEnter}
			aria-label="Nom de la carte"
		/>
	);
}
