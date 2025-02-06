import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import LoginForm from './pages/Login/LoginForm.jsx';
import SignupForm from './pages/Signup/SignupForm.jsx';
import './assets/App.css';
import { Route, Routes } from 'react-router';
import storage from './services/storage/storage.js';
import { setAuthenticationHeaders } from './services/api/api.js';
import { ToastContainer } from 'react-toastify';
import AuthGuard from './components/AuthGuard.jsx';
import BoardPage from './pages/Board/Board.jsx';
import DashboardPage from './pages/Dashboard/Dashboard.jsx';
import CreateBoardPage from './pages/CreateBoard/CreateBoard.jsx';

function App() {
  const token = storage.getAuthToken();

  if (token) {
    // si on a un token, on l'ajoute aux entêtes Axios
    setAuthenticationHeaders(token);

  }

  return (
    <>
      <Navbar />
      <div className="hero is-fullheight has-background">
        <div className="hero-body">
          <Routes>
            {/* HomePage */}
            <Route path="/" element={<Home />} />
            <Route path="/se-connecter" element={<LoginForm />} />
            <Route path="/inscription" element={<SignupForm />} />
            <Route element={<AuthGuard />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/boards/:id" element={<BoardPage />} />
              <Route path="/nouveau-board" element={<CreateBoardPage />} />
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
