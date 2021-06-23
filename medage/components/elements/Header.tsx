// react
import React from "react";
// context
// import { useAppContext } from "contexts/global";
//icons
import { ChevronDown } from "@styled-icons/boxicons-regular";

const Header = () => {
  // const { globalState } = useAppContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand pe-3" href="#">
          <span className="ms-3 fw-bold">Iatros</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#simpleNav"
          aria-controls="simpleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="simpleNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav d-flex align-items-center justify-content-end">
            <li className="nav-item">
              <a className="nav-link p-0" href="#">
                <h6 className="text-base-black fw-bold m-0">
                  Welcome, Jeevan Jessi
                </h6>
              </a>
            </li>
            <li className="nav-item mx-4">
              <img
                className="rounded img-fit"
                src="https://source.unsplash.com/random"
                width="40"
                height="40"
              />
            </li>
            <li className="nav-item">
              <ChevronDown size="15" className="text-muted" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
