import { useState, useRef, useEffect } from "react";
import cardApi from "../../../services/api/card.js";
import {toast} from "react-toastify";
import {useBoardContext} from "../../../contexts/BoardContext/BoardContext.jsx";


export default function EditableTitleUpdate({ card, setIsEditing}) {
    const [title, setTitle] = useState(card.title);
    const inputRef = useRef(null);
    const{updateCardModal}= useBoardContext();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleUpdateTitle = () => {
        cardApi.updateCard(card.id, {title}).then((response) => {
            if (response.id) {
                updateCardModal(card.list_id, card.id, {title});
            }
        });
    };

    const handleBlurOrEnter = (e) => {
        if (e.type === "blur" || e.key === "Enter") {
            if (title.trim()) {
                handleUpdateTitle();

            }else{
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleBlurOrEnter}
            onKeyDown={handleBlurOrEnter}
            aria-label="Nom de la carte"
        />
    );
}
