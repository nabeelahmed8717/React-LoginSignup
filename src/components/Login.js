import React, { useEffect, useState } from "react";

import MainClasses from "./MainStyles.module.css";
import { useHistory } from "react-router-dom";
import Loading from "./UI/Loading";
import Home from "./Home";
import Header from "./Header";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [UserNotFound, setUserNotFound] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const roleAdmin = "admin";
  const roleUser = "user";

  function loginHandler(e) {
    e.preventDefault();
  }

  async function login(event) {
    setIsLoading(true);
    const userFetchedData = [];
    event.preventDefault();
    const response = await fetch(
      "https://usersdata-56b3b-default-rtdb.firebaseio.com/Users.json"
    );
    const data = await response.json();

    console.log(response);

    console.log("data from fireBase", data);
    console.log("usersData", userFetchedData);
    console.log("data", enteredEmail, enteredPassword);

    for (const key in data) {
      console.log("admin", data[key]);
      if (
        data[key].email !== enteredEmail &&
        data[key].password !== enteredPassword
      ) {
        setUserNotFound(true);
        console.log("trigger if user not found");
      } else if (data[key].userRole === "admin") {
        history.push("/Admin");
        console.log("welcome to admin");
        console(data[key].userRole);
      } else {
        history.push("/Home");
        props.setUserId(key)
        console.log("key", key);
        console.log("welcome to dashboard");
      }
    }
    console.log(userFetchedData);

    setIsLoading(false);
  }

  // {isLoading && <Loading/> }
  return (
    <div>
      <Header />

      <div className={MainClasses.container}>
        <h1 className={MainClasses.Large_heads}>Login</h1>
        {UserNotFound && (
          <p className={MainClasses.Error}>Oops! User Not Found</p>
        )}

        <br />
        <form onSubmit={loginHandler}>
          <div className={MainClasses.inputGroup}>
            <div className={MainClasses.inputFields}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                onChange={(e) => setEnteredEmail(e.target.value)}
              />
            </div>
            <div className={MainClasses.inputFields}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="text"
                onChange={(e) => setEnteredPassword(e.target.value)}
              />
            </div>

            <button onClick={login}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
