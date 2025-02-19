import React, {useState} from "react";
import EditableTitleUpdate from "../../EditableTitle/Update/EditableTitleUpdate.jsx"
import EditableDescription from "./CardDescription/CardDescription.jsx";

export default function CardModal({ setIsModalOpen, isOpen, card }) {
    if (!isOpen) return null;

    const [isEditing, setIsEditing] = useState(false);
    const[isAddingDescription, setIsAddingDescription] = useState(false);

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={()=>{setIsModalOpen(false)}}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <button className="delete mr-3" aria-label="close" onClick={()=>{setIsModalOpen(false)}}/>
                    {isEditing ?
                        (<EditableTitleUpdate
                            card={card}
                            setIsEditing={setIsEditing}
                        />) :
                        (<h2 className="title is-4" onClick={()=>setIsEditing(true)}>
                            {card.title}
                        </h2>)
                    }

                </header>
                <section className="modal-card-body">
                    <div className="box">
                        {isAddingDescription ?
                            <EditableDescription setIsAddingDescription={setIsAddingDescription} card={card} />
                            :
                            card.description ?
                                <p onClick={()=>{setIsAddingDescription(true)}}>{card.description}</p>
                                :
                                <button className="button is-primary mb-5" type="button" onClick={() => { setIsAddingDescription(true) }}>
                                    Ajouter une description
                                </button>
                        }

                        {card.labels?.length > 0 && (
                            <div className="tags">
                                {card.labels.map((label) => (
                                    <span key={label.id} className="tag is-info">
                                        {label.title}
                                    </span>
                                ))}
                            </div>
                        )}

                        {card.comments?.length > 0 && (
                            <div className="mt-4">
                                <h3 className="title is-5">Commentaires</h3>
                                <ul>
                                    {card.comments.map((comment) => (
                                        <li key={comment.id} className="mb-2">
                                            <strong>{comment.author}:</strong> {comment.content}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button" onClick={()=>{setIsModalOpen(false)}}>
                        Fermer
                    </button>
                </footer>
            </div>
        </div>
    );
}
