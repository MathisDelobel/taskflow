import { Link } from "react-router"; // Pour les liens de navigation

function Header() {
	return (
		<header className="container has-text-centered">
			{/* Logo et Nom du site */}
			<div className="columns is-centered ">
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
				<div className="column is-narrow">
					<Link to="/inscription">
						<button type="button" className="button is-light is-rounded">
							S'inscrire
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
