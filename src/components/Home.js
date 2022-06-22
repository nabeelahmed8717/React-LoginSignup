import React from "react";
import MainClasses from "./MainStyles.module.css";

const Home = (props) => {
  console.log("home",props.userId);
  return (
    <div>
      <nav className={MainClasses.login_signup_container}>
        <h2 className={MainClasses.logo}>ReactApp</h2>
        <div className={MainClasses.navFlexButtons}>
          <button className={MainClasses.navButtons_forHome}>Add course</button>
        </div>
      </nav>
      
      <div className={MainClasses.mainContainer}>
      <p>{props.userName}</p>
      <h1 className={MainClasses.HomeHeading}>Welcome To Home {props.userId}</h1>

      <div className="add-course">
        <input type="text" name="" id="" />
        <input type="submit" />
      </div>

      <div className={MainClasses.cardCourse}>
        <div>
        <h3 className={MainClasses.courseTitle}>Title</h3>
        <p className={MainClasses.course}>Course 1</p>
        </div>
        <button className="me-0 btn btn-info">Apply</button>
      </div>
      </div>

    </div>
  );
};

export default Home;
