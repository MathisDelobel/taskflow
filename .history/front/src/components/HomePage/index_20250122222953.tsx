import Cards from "./Cards/Cards.tsx";
import Boards from "./Boards/BoardsTable.tsx";

export default function HomePage() {
	return (
		<div className="container">
			<div className="columns">
				<Boards />
				<Cards />
			</div>
		</div>
	);
}
