function LoginForm() {
	return (
		<div className="section">
			<div className="container">
				<div className="columns is-centered">
					<div className="column is-half">
						<h1 className="title has-text-centered">Connexion</h1>
						<form>
							<div className="field">
								<label className="label" htmlFor="username">
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
								<label className="label" htmlFor="password">
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
									<button
										className="button is-primary is-fullwidth"
										type="submit"
									>
										Se connecter
									</button>
								</div>
							</div>

							<div className="has-text-centered mt-4">
								<p>
									Pas encore inscrit ? <a href="/signup">Créer un compte</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
