import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/react.svg";

const Header = () => {
    return (
        <div>
            <header>
                {/* Creating NavBar */}
                <Link to="/" className="logo">
                    <img src={logo} alt="ReactJS" /> ReactJS
                </Link>

                {/* Link Buttons */}
                <nav>
                    <NavLink to="">Home</NavLink>
                    <NavLink to="/movie">Movies</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Header
