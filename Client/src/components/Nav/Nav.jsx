import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../../assets/Rick-and-Morty.png";
import navStyles from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  function isActiveFunc(match, location) {
    if (location.pathname === "/") {
      return true;
    }
    return false;
  }
  return (
    <div className={navStyles.navContainer}>
      <figure>
        <img src={logo} alt="rick-and-morty-logo" />
      </figure>
      <ul className={navStyles["navContainer-routes"]}>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? navStyles["active"] : navStyles["disable"]
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? navStyles["active"] : navStyles["disable"]
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? navStyles["active"] : navStyles["disable"]
            }
          >
            FAVORITES
          </NavLink>
        </li>
      </ul>
      <div className={navStyles["navContainer-search"]}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
