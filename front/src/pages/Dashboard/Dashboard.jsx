import BoardsTable from '../../components/Boards/BoardsTable.jsx';
import { useEffect } from 'react';
import { useUserContext } from '../../contexts/UserContext.jsx';

function Dashboard() {
  const { userData } = useUserContext();

  if (!userData)
    return (
      <div className="has-text-centered">
        <button className="button is-loading is-large is-primary">
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

export default Dashboard;
