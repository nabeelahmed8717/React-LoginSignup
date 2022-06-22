import React from 'react'
import { NavLink } from 'react-router-dom'
import MainClasses from "./MainStyles.module.css";

const Header = () => {
  return (
    <nav className={MainClasses.login_signup_container}>
      <h2 className={MainClasses.logo}>ReactApp</h2>
      <div className={MainClasses.navFlexButtons}>
      <NavLink activeClassName={MainClasses.activeNavLink} to='/Login'><button className={MainClasses.navButtons}>Login</button></NavLink>
      <NavLink activeClassName={MainClasses.activeNavLink} to="/Signup"><button className={MainClasses.navButtons}>Signup</button></NavLink>
      </div>
    </nav>
  )
}

export default Header