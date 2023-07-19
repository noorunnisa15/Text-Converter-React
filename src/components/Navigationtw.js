import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

function Navigationtw(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <nav
        className={`relative flex flex-wrap items-center justify-between p-2 bg-${props.mode} mb-0 fixed-top`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 uppercase"
              to="/"
              style={{
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Navbar
            </Link>
            <button
              className="cursor-pointer text-2xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              style={{
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              {!navbarOpen ? <FiMenu /> : <CgClose />}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col mb-0 max-lg:pl-0 lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-base uppercase font-bold leading-snug hover:opacity-75"
                  to="/classcomponent"
                  style={{
                    color: props.mode === "light" ? "black" : "white",
                  }}
                >
                  <i className="fab fa-facebook-square text-base leading-lg opacity-75"></i>
                  <span className="ml-2">ClassComponent</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-base uppercase font-bold leading-snug hover:opacity-75"
                  to="/tweet"
                  style={{
                    color: props.mode === "light" ? "black" : "white",
                  }}
                >
                  <i className="fab fa-twitter text-base leading-lg opacity-75"></i>
                  <span className="ml-2">Tweet</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-base uppercase font-bold leading-snug hover:opacity-75"
                  to="/pin"
                  style={{
                    color: props.mode === "light" ? "black" : "white",
                  }}
                >
                  <i className="fab fa-pinterest text-base leading-lg opacity-75"></i>
                  <span className="ml-2">ChatBot</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigationtw;
