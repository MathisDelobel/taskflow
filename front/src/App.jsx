import 'bulma/css/bulma.min.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import LoginForm from './pages/Login/LoginForm.jsx';
import SignupForm from './pages/Signup/SignupForm.jsx';
import './assets/App.css';
import { Route, Routes } from 'react-router';
import { useState } from 'react';
import storage from './services/storage/storage.js';
import { setAuthenticationHeaders } from './services/api/api.js';
import { ToastContainer } from 'react-toastify';
import AuthGuard from './components/AuthGuard.jsx';
import BoardPage from './pages/Board/Board.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';

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

  return (
    <>
      <Navbar isLogged={isLogged} />
      <div className="hero is-fullheight has-background">
        <div className="hero-body">
          <Routes>
            {/* HomePage */}
            <Route path="/" element={<Home />} />
            <Route
              path="/se-connecter"
              element={<LoginForm setIsLogged={setIsLogged} />}
            />
            <Route path="/inscription" element={<SignupForm />} />
            <Route element={<AuthGuard />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/boards/:id" element={<BoardPage />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
