import { Link } from "react-router";

function Cards() {
	return (
		<div className="container">
			<h1 className="title has-text-centered has-text-white">
				Bienvenue sur TaskFlow
			</h1>

			{/* Section pour afficher les boards */}
			<div className="columns is-centered">
				<div className="column is-half">
					<div className="card">
						<header className="card-header">
							<p className="card-header-title">Mes Boards</p>
						</header>
						<div className="card-content">
							<ul>
								{/* Liste des boards cliquables */}
								<li className="mb-2">
									<Link to="/board/1" className="has-text-info">
										- Projet Alpha
									</Link>
								</li>
								<li className="mb-2">
									<Link to="/board/2" className="has-text-info">
										- Projet Beta
									</Link>
								</li>
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
		</div>
	);
}

export default Cards;
