import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserInfo() {

const { userName, email, phoneNumber, theme } = useContext(UserContext);
  return (

<div className={`card shadow user-card ${theme === "dark" ? "bg-dark text-light" : ""}`}>
      <div className="card-body">

        <h5 className="card-title mb-4">
         Personal Informations
        </h5>

        <p>
          <strong>Name:</strong> {userName}
        </p>

        <p>
          <strong>Email:</strong> {email}
        </p>

        <p>
          <strong>Phone:</strong> {phoneNumber}
        </p>

      </div>

    </div>

  );
}

export default UserInfo;