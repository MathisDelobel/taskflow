import Card from "../Card/Card";
import EditableTitleCreate from "../EditableTitle/Create/EditableTitleCreate.jsx";
import { useState } from "react";


export default function List({ list }) {

    const [isAdding, setIsAdding] = useState(false);

    return (
        <div key={list.id} className="column is-one-third">
            <div className="box">
                <h2 className="title is-4 has-text-primary">{list.title}</h2>
                {list.cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}

                {!isAdding ? (
                    <button className="button is-primary" onClick={()=>{setIsAdding(true)}}>
                        Ajouter une carte
                    </button>
                ) : (
                    <EditableTitleCreate setIsAdding={setIsAdding} list={list} />
                )}
            </div>
        </div>
    );
}
