import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const Dashboard = () => {
const {logout} = useContext(AuthContext);

    return (
      <>
      <h1>DashBoard</h1>
      <button onClick={logout}>Deslogar</button>
      </>
    )
};

export default Dashboard;