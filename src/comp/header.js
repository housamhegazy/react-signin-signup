import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeContext from "../context/themeProvider";
import { useContext } from "react";
import "./Header.css";
import '../theme.css'
import DarkMood from "../localStorage/DarkMood";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";



const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const {theme,changeTheme} = useContext(ThemeContext);
  return (
    <div className= "myheader ali">
      <header className="hide-when-mobile ali">
        <h1>
          <Link to="/">c4a.dev</Link>
        </h1>
        
        {/* <button onClick={()=>{
          changeTheme(theme == 'light'? 'dark': 'light')
          //send to local storage
          DarkMood(theme)
          }} className="theme-btn">{theme}
        </button> */}
      
          <i onClick={()=>{
          changeTheme(theme === 'light'? 'dark': 'light')
          //send to local storage
          DarkMood(theme)
          }} className="fa-solid fa-moon"></i>
          <i onClick={()=>{
          changeTheme(theme === 'light'? 'dark': 'light')
          //send to local storage
          DarkMood(theme)
          }} className="fa-solid fa-sun"></i>
        
        <ul className="flex">

          {!user && 
            <li className="main-list">
              <NavLink className="main-link" to="/signin">
                Sign in
              </NavLink>
            </li>}
          {!user && 
            <li className="main-list">
            <NavLink className="main-link" to="/signup">
              Sign up
            </NavLink>
            </li>}
          
          {user && 
          <li onClick={()=>{
            signOut(auth).then(() => {
              // Sign-out successful.
              console.log("Sign-out successful.")
            }).catch((error) => {
              // An error happened.
              console.log("error")
            });
          }} className="main-list">
            <button className="main-link">
              Sign Out
            </button>
            </li>}
          


          {user && 
            <li className="main-list">
            <NavLink className="main-link" to="/about">
              About
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </li>
          }
          

          {user && 
            <li className="main-list">
            <NavLink className="main-link" to="/profile">
              Profile
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>
          </li>
          }
        </ul>
      </header>

      <header className="show-when-mobile ali">
        <h1>c4a.dev</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="about">
              About <i className="fas fa-plus" />
            </label>
            <input id="about" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/about">Full Course</NavLink>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          
          <div className="main-div">
            <label htmlFor="js">
              profile <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/profile">coming soon🔥</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
