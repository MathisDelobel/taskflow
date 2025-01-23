import 'bulma/css/bulma.min.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import SignupForm from './components/SignupForm/SignupForm.jsx';
import Cards from './components/Dashboard/Boards/Boards.jsx';
import './assets/App.css';
import { Route, Routes } from 'react-router';
import { useState } from 'react';
import storage from './services/storage/storage.js';
import { setAuthenticationHeaders } from './services/api/api.js';
import { ToastContainer } from 'react-toastify';

function App() {
  // State variable : logged?
  // valeur initiale = est-ce que j'ai un token ?
  // je le récupère depuis le LocalStorage…
  // `!!myVariable` permet de récupérer la valeur booléenne
  // d'une variable (= double NOT logical)
  const token = storage.getAuthToken();
  const [isLogged, setIsLogged] = useState(!!token);

  if (token) {
    // si on a un token, on l'ajoute aux entêtes Axios
    setAuthenticationHeaders(token);
  }

  console.log(isLogged);

  return (
    <>
      <Navbar isLogged={isLogged} />
      <div className="hero is-fullheight has-background">
        <div className="hero-body">
          <Routes>
            {/* HomePage */}
            <Route path="/" element={<Header />} />
            <Route
              path="/se-connecter"
              element={<LoginForm setIsLogged={setIsLogged} />}
            />
            <Route path="/inscription" element={<SignupForm />} />

            <Route path="/dashboard" element={<Cards />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
