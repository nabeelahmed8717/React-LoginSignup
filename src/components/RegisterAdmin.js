import React, { useState } from "react";
import MainClasses from "./MainStyles.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const RegisterAdmin = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userRole, setUserRole] = useState("admin");

  const history = useHistory();

  function registerHandler(e) {
    e.preventDefault();
  }
  async function saveUser(e) {
    e.preventDefault();
    console.warn({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      userRole,
    });

    const data = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      userRole,
    };

    let result = await fetch(
      "https://usersdata-56b3b-default-rtdb.firebaseio.com/Users.json",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    result = await result.json();
    console.log("result", result);
    localStorage.setItem("users-data", JSON.stringify(result));
    history.push("Login");
  }

  return (
    <div>
      <div className={MainClasses.container}>
        <h1 className={MainClasses.Large_heads}>Admin SignUp</h1>
        <br />

        <div className={MainClasses.inputGroup}>
          <form onSubmit={registerHandler}>
            <div className={MainClasses.inputFields}>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className={MainClasses.inputFields}>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className={MainClasses.inputFields}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <input
              type="hidden"
              onChange={(e) => setUserRole(e.target.value)}
              value="user"
              placeholder="userRole"
            />

            <div className={MainClasses.inputFields}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className={MainClasses.inputFields}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="text"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
            <button onClick={saveUser}>Sign Up</button>
            <p className={MainClasses.lowerText}>
              Already have an account ? <span>Login</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterAdmin;
