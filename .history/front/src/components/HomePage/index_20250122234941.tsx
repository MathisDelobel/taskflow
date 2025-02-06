import Cards from "./Cards/Cards.tsx";
import Boards from "./Boards/BoardsTable.tsx";
import Header from "./Header/Home.tsx";

export default function HomePage() {
	return (
		<div className="container">
			<div className="columns">
				<Header />
				<Boards />
				<Cards />
			</div>
		</div>
	);
}
