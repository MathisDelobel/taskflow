import BoardsTable from '../../components/Boards/BoardsTable.jsx';
import userApi from '../../services/api/user.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import storage from '../../services/storage/storage.js';

function Dashboard() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    function getCurrentUser() {
      userApi
        .getCurrentUser()
        .then((user) => {
          if (user.isAuthenticated) {
            setUser(user);
          }
        })
        .catch((err) => {
          setUser(null);
          storage.removeItem('token');
          navigate('/');
        });
    }
  }, []);

  return (
    <div className="container">
      <h1 className="title has-text-centered has-text-white">
        Bienvenue sur TaskFlow
      </h1>

      <BoardsTable />
    </div>
  );
}

export default Dashboard;
