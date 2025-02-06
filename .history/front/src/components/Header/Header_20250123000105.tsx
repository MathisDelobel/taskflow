import { Link } from "react-router"; // Pour les liens de navigation

function Header() {
	return (
		<div className="hero is-fullheight has-background">
			<div className="hero-body has-text-centered">
				{" "}
				{/* Hero body avec alignement centré */}
				<div className="container">
					{/* Logo et Nom du site */}
					<div className="columns is-vcentered is-centered">
						{" "}
						{/* Colonnes centrées */}
						<div className="column is-narrow">
							<h1 className="title has-text-white">TaskFlow</h1>
							<p className="subtitle has-text-white">
								Organisez vos tâches efficacement
							</p>
						</div>
						{/* Bouton de navigation "Se connecter" */}
						<div className="column is-narrow">
							<Link to="/se-connecter">
								<button type="button" className="button is-light is-rounded">
									Se connecter
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
