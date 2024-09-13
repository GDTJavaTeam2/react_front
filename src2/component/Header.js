import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
// import "./Header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isWorklifeOpen, setIsWorklifeOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Navbar
      className="border-bottom sticky-top w-100 d-flex justify-content-between px-3"
      expand="md"
      style={{
        width: "100vw",
        height: "60px",
        position: "fixed",
        justifyContent: "flex-end",
        backgroundColor: "white",
        zIndex: 1,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Nav className="align-items-center">
        <NavItem>
          <NavLink href="/">
            <img
              src={require("../images/home-logo.jpg")}
              alt="logo"
              className="header-logo"
              style={{ width: "30px", marginLeft: "200px", height: "auto" }}
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="header-title"
            style={{ color: "#a0a4a6", marginLeft: "-20px" }}
          >
            <b>Home</b>
          </NavLink>
        </NavItem>
      </Nav>

      <Nav className="d-flex align-items-center">
        <div className="dropdown">
          <div
            className="menu-item dropdown-toggle"
            onClick={() => setIsWorklifeOpen(!isWorklifeOpen)}
          >
            <div>Quick Link</div>
          </div>
          {isWorklifeOpen && (
            <div className="dropdown-menu">
              <Link to="/worklife/dashboard" className="dropdown-item">
                Undecided
              </Link>
              <Link to="/worklife/projects" className="dropdown-item">
                Undecided
              </Link>
            </div>
          )}
        </div>

        <NavItem>
          <NavLink
            href="/"
            className="d-flex align-items-center"
            style={{ color: "#a0a4a6", marginLeft: "20px" }}
          >
            <FontAwesomeIcon icon={faBell} className="mx-2" />
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            href="/"
            className="d-flex align-items-center"
            style={{ color: "#a0a4a6" }}
          >
            <FontAwesomeIcon icon={faPowerOff} className="mx-2" />
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
