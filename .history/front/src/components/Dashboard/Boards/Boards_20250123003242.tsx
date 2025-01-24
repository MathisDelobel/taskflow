import { Link } from "react-router";

function Cards() {
	// Données en dur pour les boards et les tâches
	const boards = [
		{ id: 1, name: "Projet Alpha" },
		{ id: 2, name: "Projet Beta" },
	];

	const tasks = [
		{ id: 1, name: "Tâche 1 - Réaliser la maquette", project: "Alpha" },
		{ id: 2, name: "Tâche 2 - Intégration HTML", project: "Beta" },
	];

	return (
		<div className="hero is-fullheight has-background-light">
			<div className="hero-body">
				<div className="container">
					<h1 className="title has-text-centered">Bienvenue sur TaskFlow</h1>

					{/* Section pour afficher les boards */}
					<div className="columns is-centered">
						<div className="column is-half">
							<h2 className="title is-4">Mes Boards</h2>
							{boards.length > 0 ? (
								boards.map((board) => (
									<div className="card" key={board.id}>
										<header className="card-header">
											<p className="card-header-title">{board.name}</p>
										</header>
										<footer className="card-footer">
											<Link
												to={`/board/${board.id}`}
												className="card-footer-item"
											>
												Voir le board
											</Link>
										</footer>
									</div>
								))
							) : (
								<p>Aucun board trouvé.</p>
							)}
							<div className="card mt-4">
								<header className="card-header">
									<p className="card-header-title">Créer un nouveau board</p>
								</header>
								<footer className="card-footer">
									<Link to="/create-board" className="card-footer-item">
										Créer un board
									</Link>
								</footer>
							</div>
						</div>

						{/* Section pour afficher les tâches assignées */}
						<div className="column is-half">
							<h2 className="title is-4">Mes Tâches Assignées</h2>
							{tasks.length > 0 ? (
								tasks.map((task) => (
									<div className="card" key={task.id}>
										<header className="card-header">
											<p className="card-header-title">{task.name}</p>
										</header>
										<footer className="card-footer">
											<p className="card-footer-item">Projet: {task.project}</p>
										</footer>
									</div>
								))
							) : (
								<p>Aucune tâche assignée.</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
