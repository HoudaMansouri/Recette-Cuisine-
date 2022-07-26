import React from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import data from "../data";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="./recette.png" alt="logo" />
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            
              
              {data.map((recette) => {
                return (
                  <li key={recette.id}>
                    <Link to={`${recette.title}`}>{recette.title}</Link>
                  </li>
                );
              })}
            
            {/*<NavLink to="/crepe">
              <li>Crêpes</li>
            </NavLink>
            <NavLink to="/pizza">
              <li>Pizza</li>
            </NavLink>
            <NavLink to="/hamburger">
              <li>Hamburger</li>
            </NavLink>
            <NavLink to="/pate">
              <li>Tagliatelle</li>
            </NavLink>
            <NavLink to="/veloute">
              <li>Velouté</li>
            </NavLink>
            <NavLink to="/fondant">
              <li>Fondant au chocolat</li>
  </NavLink>*/}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
