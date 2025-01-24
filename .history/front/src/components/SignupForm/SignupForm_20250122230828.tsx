function SignupForm() {
	return (
		<div className="container has-text-centered">
			<div className="columns is-centered">
				<div className="column is-half">
					<h1 className="title has-text-white">S'inscrire</h1>
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
									placeholder="Nom d'utilisateur"
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
									placeholder="Mot de passe"
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
									Créer votre compte
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignupForm;
