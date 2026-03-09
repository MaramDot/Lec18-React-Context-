import { useState } from "react";
import { UserContext } from "./context/UserContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");

  return (

    <UserContext.Provider
      value={{
        userName,
        setUserName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        isLoggedIn,
        setIsLoggedIn,
        theme,
        setTheme
      }}
    >

      <div className={theme === "dark" ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>

        {isLoggedIn ? <Dashboard /> : <Login />}

      </div>

    </UserContext.Provider>

  );
}

export default App;