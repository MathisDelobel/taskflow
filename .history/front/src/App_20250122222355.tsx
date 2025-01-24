import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import HomePage from "./components/HomePage/index.tsx";
import "./App.css";
import { Route, Ruutes } from "react-router";

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/se-connecter" element={<HomePage />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
