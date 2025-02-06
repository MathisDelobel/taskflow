import { useNavigate } from 'react-router';
import boardApi from '../../services/api/board.js';

export default function CreateBoardPage() {
  const navigate = useNavigate();

  async function handleSubmit(formData) {
    const boardData = Object.fromEntries(formData.entries());
    boardApi.createBoard(boardData).then((response) => {
      navigate(`/boards/${response}`);
    });
  }

  return (
    <div className="container has-text-centered">
      <div className="columns is-centered">
        <div className="column is-half">
          <h1 className="title has-text-white">Nouveau Board</h1>
          <form action={handleSubmit}>
            <div className="field">
              <label className="label has-text-white" htmlFor="title">
                Titre du board
              </label>
              <div className="control">
                <input
                  id="title"
                  className="input"
                  name="title"
                  type="text"
                  placeholder="Entrez un titre pour votre board"
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
                  Créer le board
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
