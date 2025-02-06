import Card from '../Card/Card';
import {useState, useRef} from "react";
import cardApi from "../../services/api/card.js";
import {toast} from "react-toastify";

export default function List({ list, onAddCard }) {
    const [isAdding, setIsAdding] = useState(false);
    const [cardTitle, setCardTitle] = useState("");
    const inputRef = useRef(null);

    const handleAddCard = () => {
        setIsAdding(true);
        setTimeout(() => inputRef.current?.focus(), 0); // Focus automatique sur l'input
    };

    const handleBlur = () => {
        if (cardTitle.trim()) {
            const data = { list_id: list.id, title: cardTitle};
            cardApi.createCard(data).then((response) => {
                if (response.card){
                    toast.success(response.message);
                    onAddCard(list.id, response.card);
                }

            }); // Ajoute la carte
        }
        setIsAdding(false);
        setCardTitle(""); // Réinitialiser le champ
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleBlur();
        }
    };

    if (!list) {
        return <div>Loading</div>
    }

    return (
        <div key={list.id} className="column is-one-third">
            <div className="box">
                <h2 className="title is-4 has-text-primary">{list.title}</h2>
                    {list.cards.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}

                    {/* Bouton "Ajouter une carte" */}
                    {!isAdding ? (
                        <button className="button is-primary" onClick={handleAddCard}>
                            Ajouter une carte
                        </button>
                    ) : (
                        // Champ de saisie
                        <input
                            ref={inputRef}
                            name="title"
                            type="text"
                            className="input"
                            placeholder="Nom de la carte..."
                            value={cardTitle}
                            onChange={(e) => setCardTitle(e.target.value)}
                            onBlur={handleBlur} // Validation si on clique ailleurs
                            onKeyDown={handleKeyDown} // Validation avec Enter
                        />
                    )}
                </div>
            </div>
        );

}


