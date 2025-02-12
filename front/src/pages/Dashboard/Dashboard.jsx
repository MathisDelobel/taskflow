import BoardsTable from "../../components/Boards/BoardsTable.jsx";
import { useUserContext } from "../../contexts/UserContext/UserContext.jsx";
import { useEffect } from "react";

function DashboardPage() {
	const { userData, fetchUserData } = useUserContext();

	//On fetch les données du user actuel
	useEffect(() => {
		fetchUserData();
	}, []);

	if (!userData)
		return (
			<div className="has-text-centered">
				<button type="button" className="button is-loading is-large is-primary">
					Loading...
				</button>
			</div>
		);

	return (
		<div className="container">
			<h1 className="title has-text-centered has-text-white">
				Bienvenue sur TaskFlow
			</h1>
			<BoardsTable userBoards={userData.user.boards} />
		</div>
	);
}

export default DashboardPage;
