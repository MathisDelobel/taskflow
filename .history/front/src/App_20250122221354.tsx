import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import HomePage from "./components/HomePage/index.tsx";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />

			<HomePage />
			<Footer />
		</>
	);
}

export default App;
