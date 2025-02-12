import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import userApi from '../../services/api/user.js';
import storage from '../../services/storage/storage.js';
import { setAuthenticationHeaders } from '../../services/api/api.js';
import { useUserContext } from '../../contexts/UserContext/UserContext.jsx';

function SignupForm() {
  const navigate = useNavigate();
  const { fetchUserData, setIsLogged } = useUserContext();

  async function handleSubmit(formData) {
    const userData = Object.fromEntries(formData.entries());
    const { password, confirmPassword } = userData;

    if (password !== confirmPassword) {
      toast.error('Les mots de passes ne correspondent pas');
      return;
    }

    userApi.signup(userData).then((response) => {
      if (response.token) {
        toast.success('Vous êtes à présent connecté');

        storage.setAuthToken(response.token);
        setAuthenticationHeaders(response.token);

        // Rafraîchit les données utilisateur
        fetchUserData();

        setIsLogged(true);
        navigate('/dashboard');
      }
    });
  }

  return (
    <div className="container has-text-centered">
      <div className="columns is-centered">
        <div className="column is-half">
          <h1 className="title has-text-white">S'inscrire</h1>
          <form action={handleSubmit}>
            <div className="field">
              <label className="label has-text-white" htmlFor="username">
                Nom d'utilisateur
              </label>
              <div className="control">
                <input
                  id="username"
                  name="username"
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
                  name="password"
                  className="input"
                  type="password"
                  placeholder="Mot de passe"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-white" htmlFor="confirmPassword">
                Confirmer mot de passe
              </label>
              <div className="control">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  className="input"
                  type="password"
                  placeholder="Confirmer mot de passe"
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
          <div className="has-text-centered mt-4">
            <p className="has-text-white">
              Déja inscrit ?{' '}
              <Link className="has-text-white" to="/se-connecter">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
