import React, { useState } from "react";
import MainClasses from "./MainStyles.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Header from './Header'

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userRole, setUserRole] = useState("user");

  const history = useHistory();

  // _____________________Error States

  const [firstNameHasError, setfirstNameHasError] = useState(false);
  const [lastNameHasError, setlastNameHasError] = useState(false);
  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [confirmPasswordHasError, setConfirmPasswordHasError] = useState(false);


  function registerHandler(e) {
    e.preventDefault();
  }

  function firstNameHasErrorHandler(e){
    let item=e.target.value;
    if(item.length < 3){
      setfirstNameHasError(true)
    }else{setfirstNameHasError(false)}
    console.log(e.target.value.length)
  }
  function lastNameHasErrorHandler(e){
    let item=e.target.value;
    if(item.length < 3){
      setlastNameHasError(true)
    }else{setlastNameHasError(false)}
  }
  function emailHasErrorHandler(e){
    let item=e.target.value;
    if(item.length < 3){
      setEmailHasError(true)
    }else{setEmailHasError(false)}
  }
  function passwordHasErrorHandler(e){
    let item=e.target.value;
    if(item.length < 3){
      setPasswordHasError(true)
    }else{setPasswordHasError(false)}
  }



  function confirmPasswordHasErrorHandler(e){
    let item=e.target.value;
    let passValue = password;
    if(item.value !== passValue.value){
      setConfirmPasswordHasError(true)
    }else{setConfirmPasswordHasError(false)}
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
      <Header />
      <div className={MainClasses.container}>
        <Link to='RegisterAdmin'><button className={MainClasses.adminButton}>Admin SignUp</button></Link>
        <h1 className={MainClasses.Large_heads}>SignUp</h1>
        <br />

        <div className={MainClasses.inputGroup}>
          <form onSubmit={registerHandler}>
            <div className={MainClasses.inputFields}>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                onChange={(e)=>setFirstName(e.target.value)}
                onKeyUp={firstNameHasErrorHandler}
              />
            {firstNameHasError && <p className={MainClasses.errorText}>*First name must be upto 3 char ^</p>}
            </div>

            <div className={MainClasses.inputFields}>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                onChange={(e)=>setLastName(e.target.value)}
                onKeyUp={lastNameHasErrorHandler}
              />
              {lastNameHasError && <p className={MainClasses.errorText}>*Last name must be upto 3 char ^</p>}
            </div>
            <div className={MainClasses.inputFields}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                onChange={(e)=>setEmail(e.target.value)}
                onKeyUp={emailHasErrorHandler}
              />
              {emailHasError && <p className={MainClasses.errorText}>*Please enter valid Email</p>}
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
                onChange={(e)=>setPassword(e.target.value)}
                onKeyUp={passwordHasErrorHandler}
              />
              {passwordHasError && <p className={MainClasses.errorText}>*Please enter valid pass</p>}
            </div>
            <div className={MainClasses.inputFields}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="text"
                onChange={(e)=>setConfirmPassword(e.target.value)}
                onKeyUp={confirmPasswordHasErrorHandler}
              />
              {confirmPasswordHasError && <p className={MainClasses.errorText}>*Please enter valid Cpass</p>}
            </div>
            <button onClick={saveUser}>Sign Up</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
