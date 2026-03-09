import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {

  const {
    setUserName,
    setEmail,
    setPhoneNumber,
    setIsLoggedIn
  } = useContext(UserContext);

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    setUserName(name);
    setEmail(mail);
    setPhoneNumber(phone);

    setIsLoggedIn(true);
  };

  return (

    <div className="container d-flex justify-content-center align-items-center min-vh-100">

      <div className="card shadow p-4 login-card">

        <h3 className="text-center mb-4">🔒 Login Page</h3>

        <input
          className="form-control mb-3"
          placeholder="User Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setMail(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-4"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>

  );
}

export default Login;