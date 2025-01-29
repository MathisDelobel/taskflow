import { Link } from 'react-router';

function BoardsTable({ userBoards }) {
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Mes Boards</p>
          </header>
          <div className="card-content">
            <ul>
              {userBoards.map((board) => (
                <li key={board.id} className="mb-2">
                  <Link to={`/boards/${board.id}`} className="has-text-info">
                    - {board.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <footer className="card-footer">
            {/* Lien pour créer un nouveau board */}
            <Link to="/nouveau-board" className="card-footer-item">
              Créer un board
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default BoardsTable;
