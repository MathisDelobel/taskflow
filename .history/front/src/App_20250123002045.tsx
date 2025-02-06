import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Home.tsx";
import LoginForm from "./components/LoginForm/Login.tsx";
import SignupForm from "./components/SignupForm/Signup.tsx";
import Boards from "./components/Dashboard/Boards/BoardsTable.tsx";
import "./App.css";
import { Route, Routes } from "react-router";

function App() {
	return (
		<>
			<Navbar />
			<div className="hero is-fullheight has-background">
				<div className="hero-body">
					{/* HomePage */}
					<Routes>
						<Route path="/" element={<Header />} />
						<Route path="/se-connecter" element={<LoginForm />} />
						<Route path="/inscription" element={<SignupForm />} />
					</Routes>

					<Routes>
						<Route path="/dashboard" element={<Boards />} />
					</Routes>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
