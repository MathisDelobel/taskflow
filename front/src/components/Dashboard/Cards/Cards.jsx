export default function Cards() {
	return (
		<div className="column is-half">
			<h2 className="title is-4 has-text-white">Mes tâches assignées</h2>
			<div className="card">
				<header className="card-header has-background-success">
					<p className="card-header-title has-text-white">Tâches en cours</p>
				</header>
				<div className="card-content">
					<ul>
						<li>
							<span className="tag is-success">
								Tâche 1 - Réaliser la maquette (Projet Alpha)
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
