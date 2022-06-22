import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import RegisterAdmin from "./components/RegisterAdmin";
import Admin from "./components/Admin";

function App() {
  const [userId,setUserId] = useState("")
  return (
    <div>
      <Route exact path="/">
        <Redirect to="/Login" />
      </Route>
      
      <Route path="/Login">
        <Login setUserId={setUserId} />
      </Route>
      <Route path="/Signup">
        <Signup />
      </Route>
      <Route path="/Home" >
        <Home userId={userId} />
      </Route>
      <Route path="/Admin">
        <Admin />
      </Route>
      <Route path="/RegisterAdmin">
        <RegisterAdmin />
      </Route>
    </div>
  );
}

export default App;
