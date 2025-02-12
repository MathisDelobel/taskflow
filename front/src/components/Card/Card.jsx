import {useState} from "react";
import CardModal from "../Modals/CardModal/CardModal.jsx";

export default function Card({ card}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Vérifier si card est défini
    if (!card) return <div className="title">Loading...</div>;

    // Initialiser les propriétés manquantes
    const labels = card.labels || []; // Si card.labels est undefined, utiliser un tableau vide
    const comments = card.comments || []; // Si card.comments est undefined, utiliser un tableau vide

    return (
        <>
        <div key={card.id} className="card mb-3">
            <header className="card-header">
                <p className="card-header-title">{card.title}</p>
                <button className="card-header-icon">
                    <span className="icon" onClick={() => setIsModalOpen(true)}>
                        <i className="fas fa-edit"></i>{' '}
                    </span>
                </button>
            </header>

            <div className="card-content">
                <div className="content">
                    <p>{card.description}</p>
                    {labels.length > 0 && ( // Utiliser la variable labels
                        <div className="tags">
                            {labels.map((label) => (
                                <span key={label.id} className="tag is-info">
                                    {label.title}
                                </span>
                            ))}
                        </div>
                    )}
                    {comments.length > 0 && ( // Utiliser la variable comments
                        <div className="mt-3">
                            <strong>Commentaires :</strong>
                            <ul>
                                {comments.map((comment) => (
                                    <li key={comment.id}>{comment.content}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {/*{card.image && (*/}
                    {/*  <figure className="image is-4by3 mt-3">*/}
                    {/*    <img src={card.image} alt="Illustration" />*/}
                    {/*  </figure>*/}
                    {/*)}*/}
                </div>
            </div>
        </div>


            <CardModal isOpen={isModalOpen}
                       setIsModalOpen={setIsModalOpen}
                       card={card}
            />
            

     </>
    );
}