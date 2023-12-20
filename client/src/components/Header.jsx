import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header>
        {/* Creating NavBar */}
        <Link to="/" className="logo">
          {/* try fix logo later */}
          {/* <img src={"logo.PNG"} alt="theMovieDatabase" /> */}
          <h1>
            <b>TheMovieDatabase</b>
          </h1>
        </Link>

        {/* Link Buttons */}
        <nav>
          <NavLink to="">Home</NavLink>
          <NavLink to="/movie">Movies</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
