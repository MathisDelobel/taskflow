function LoginForm() {
	return (
		<div className="box has-background-opacity-75">
			<h1 className="title has-text-white has-text-centered">Connexion</h1>
			<form>
				<div className="field">
					<label className="label has-text-white" htmlFor="username">
						Nom d'utilisateur
					</label>
					<div className="control">
						<input
							id="username"
							className="input"
							type="text"
							placeholder="Entrez votre nom d'utilisateur"
							required
						/>
					</div>
				</div>

				<div className="field">
					<label className="label has-text-white" htmlFor="password">
						Mot de passe
					</label>
					<div className="control">
						<input
							id="password"
							className="input"
							type="password"
							placeholder="Entrez votre mot de passe"
							required
						/>
					</div>
				</div>

				<div className="field">
					<div className="control">
						<button className="button is-primary is-fullwidth" type="submit">
							Se connecter
						</button>
					</div>
				</div>

				<div className="has-text-centered mt-4">
					<p className="has-text-white">
						Pas encore inscrit ?{" "}
						<a className="has-text-white" href="/signup">
							Créer un compte
						</a>
					</p>
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
