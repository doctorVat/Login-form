import React, { useState } from "react";
import LoginForm from "./components/LoginForm"

function App() {

  const adminUser = {
    email: "lix@gmail.com",
    password: "123123",
  }

  const [user, setUser] = useState({ name: "", email: ""});
  const [error, setError] = useState ("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Login");
      setUser({
        name: details.name,
        email: details.email,
      })
    } else {
      console.log("Not Login");
      setError ("error!!!!");

    
    }
  }

  const Logout = () => {
    setUser({ name: "", email: ""});
    console.log("Logout");
  }
  
  return (
    <div className="App">
      {(user.name != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
        ) : (
          <LoginForm Login={Login} error={error}/>
        ) 
      }
    </div>
  );
}

export default App;
