import React from "react";
import { Link } from "react-router-dom";
import network from './network.svg'
import LandingPage from "./LandingPage/LandingPage";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Cyber.AI🤖
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-danger" type="submit">
                <Link  className="text-decoration-none text-dark" to="/login">Login</Link>
              </button>
            </form>
          </div>    
        </div>
      </nav>
    
      <LandingPage/>
    </div>
  );
};

export default Navbar;
