import { Link, useNavigate } from 'react-router';
import userApi from '../../services/api/user.js';
import { setAuthenticationHeaders } from '../../services/api/api.js';
import { toast } from 'react-toastify';
import storage from '../../services/storage/storage.js';
import { useUserContext } from '../../contexts/UserContext.jsx';

function LoginForm() {
  const navigate = useNavigate();
  const { setIsLogged, fetchUserData } = useUserContext();

  async function handleSubmit(formData) {
    const userData = Object.fromEntries(formData.entries());
    userApi.login(userData).then((response) => {
      if (response.token) {
        toast('Vous êtes à présent connecté', { type: 'success' });

        storage.setAuthToken(response.token);
        setAuthenticationHeaders(response.token);

        setIsLogged(true);
        navigate('/dashboard');
      }
    });
  }
  return (
    <div className="container has-text-centered">
      <div className="columns is-centered">
        <div className="column is-half">
          <h1 className="title has-text-white">Connexion</h1>
          <form action={handleSubmit}>
            <div className="field">
              <label className="label has-text-white" htmlFor="username">
                Nom d'utilisateur
              </label>
              <div className="control">
                <input
                  id="username"
                  className="input"
                  name="username"
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
                  name="password"
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
              <p className="has-text-white">
                Pas encore inscrit ?{' '}
                <Link className="has-text-white" to="/inscription">
                  Créer un compte
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
