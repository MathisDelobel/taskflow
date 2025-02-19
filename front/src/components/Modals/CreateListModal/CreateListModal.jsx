import listApi from "../../../services/api/list.js";
import React from "react";
import {toast} from "react-toastify";
import {useParams} from "react-router";
import {useBoardContext} from "../../../contexts/BoardContext/BoardContext.jsx";

export default function CreateListModal({setIsModalOpen, isModalOpen}) {

    const {addListToBoard} = useBoardContext();
    const params = useParams();

    async function handleSubmit(formData) {
        const data = {title:formData.get("title"), board_id:params.id}
        listApi.createList(data).then((response) => {
            if(response.id){
                addListToBoard(response);
                setIsModalOpen(false);
                toast.success("Nouvelle liste créée");
            }
        });
    }


    return (isModalOpen && (

    <div className="modal is-active">
        <div className="modal-background" onClick={()=>{setIsModalOpen(false)}}></div>
        <div className="modal-card">
                        <header className="modal-card-head">
                            <button className="delete mr-3" onClick={() => setIsModalOpen(false)}/>
                            <h1 className="title has-text-black">Nouvelle Liste</h1>
                        </header>
            <section className="modal-card-body">
                        <form action={handleSubmit}>
                            <div className="field">
                                <label className="label has-text-white" htmlFor="title">
                                    Titre de la liste
                                </label>
                                <div className="control">
                                    <input
                                        id="title"
                                        className="input"
                                        name="title"
                                        type="text"
                                        placeholder="Entrez un titre pour votre liste"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button
                                        className="button is-primary is-fullwidth"
                                        type="submit"
                                    >
                                        Créer la liste
                                    </button>
                                </div>
                            </div>
                        </form>

         </section>

            <footer className="modal-card-foot">
                <button className="button" onClick={()=>{setIsModalOpen(false)}}>
                    Fermer
                </button>
            </footer>
        </div>
    </div>
    ));
}
