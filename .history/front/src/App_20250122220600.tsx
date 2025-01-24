import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Boards from "./components/BoardsTable/BoardsTable.tsx";
import Cards from "./components/Cards/Cards.tsx";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<div className="hero is-fullheight has-background">
				<div className="hero-body">
					<div className="container">
						<div className="columns">
							{/* Colonne pour les boards */}
							<Boards />

							{/* Colonne pour les tâches */}
							<Cards />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default App;
