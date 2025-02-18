import { useState, useRef, useEffect } from "react";
import {useBoardContext} from "../../../../contexts/BoardContext/BoardContext.jsx";
import cardApi from "../../../../services/api/card.js";

export default function EditableDescription({ setIsAddingDescription, card }) {
    const [description, setDescription] = useState(card.description || "");
    const inputRef = useRef(null);
    const{updateCardModal}= useBoardContext();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleUpdateDescription = () => {
        cardApi.updateCard(card.id, {description}).then((response) => {
            if (response.id) {
                updateCardModal(card.list_id, card.id, {description});
            }
        });
    };

    const handleBlurOrEnter = (e) => {
        if (e.type === "blur" || e.key === "Enter") {
            if (description.trim()) {
                handleUpdateDescription();
                setIsAddingDescription(false);
            }else{
                setIsAddingDescription(false);
            }
        }
    };

    return(
        <textarea
            ref={inputRef}
            className="input"
            placeholder="Ajouter une description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={handleBlurOrEnter}
            onKeyDown={handleBlurOrEnter}
        />
    )
}
