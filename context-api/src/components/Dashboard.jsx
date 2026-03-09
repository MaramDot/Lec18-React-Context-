import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserInfo from "./UserInfo";

function Dashboard() {

  const { userName, theme, setTheme } = useContext(UserContext);

  const toggleTheme = () => {

    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }

  };

  return (

    <div className="container pt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>✌ Welcome {userName}</h2>

        <button
          className="btn btn-warning"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>

      </div>

      <p className="mb-4">
        This is your dashboard page.
      </p>

      <UserInfo />

    </div>

  );
}

export default Dashboard;