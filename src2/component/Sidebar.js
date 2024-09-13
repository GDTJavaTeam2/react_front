import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";

const Sidebar = () => {
  const [isWorklifeOpen, setIsWorklifeOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src={require("../images/header-logo.jpg")}
          alt="Logo"
          className="sidebar-logo"
        />
        <div className="user-info">
          <img
            src={require("../images/avator-demo.jpg")}
            alt="User"
            className="user-avatar"
          />
          <div className="user-details">
            <p>Hi Username</p>
            <a href="/profile" className="view-info">
              View My Info
            </a>
          </div>
          {/* setting logo from Font Awesome */}
          <a href="/settings" className="settings-icon">
            <i className="fas fa-cog"></i>
          </a>
        </div>
      </div>

      <div className="sidebar-menu">
        <Link to="/home" className="menu-item">
          <i className="fas fa-home" style={{ marginRight: "10px" }}></i> Home
        </Link>
        <Link to="/engage" className="menu-item">
          <i className="fas fa-wifi" style={{ marginRight: "10px" }}></i> Engage
        </Link>

        {/* My Worklife Dropdown */}
        <Link className="menu-item" onClick={toggleNavbar}>
          <i className="fas fa-th-large" style={{ marginRight: "10px" }}></i> My
          Worklife
          <i
            className={`fas fa-chevron-${collapsed ? "down" : "up"}`}
            style={{ marginLeft: "auto" }}
          ></i>
        </Link>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                tag={Link}
                href="/worklife/Kudos"
                className="dropdown-item menu-item"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div
                  style={{
                    height: "100%",
                    marginLeft: "25px",
                  }}
                ></div>
                <span style={{ textAlign: "left" }}>Kudos</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                href="/worklife/Feedback"
                className="dropdown-item menu-item"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div
                  style={{
                    height: "100%",
                    marginLeft: "25px",
                  }}
                ></div>
                <span style={{ textAlign: "left" }}>Feedback</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        <Link to="/todo" className="menu-item">
          <i className="fas fa-clipboard" style={{ marginRight: "10px" }}></i>{" "}
          To do
        </Link>
        <Link to="/salary" className="menu-item">
          <i
            className="fas fa-hand-holding-usd"
            style={{ marginRight: "10px" }}
          ></i>{" "}
          Salary
        </Link>
        <Link to="/leave" className="menu-item">
          <i className="fas fa-calendar" style={{ marginRight: "10px" }}></i>{" "}
          Leave
        </Link>
        <Link to="/attendance" className="menu-item">
          <i
            className="fas fa-check-square"
            style={{ marginRight: "10px" }}
          ></i>{" "}
          Attendance
        </Link>
        <Link to="/documents" className="menu-item">
          <i className="fas fa-file-alt" style={{ marginRight: "10px" }}></i>{" "}
          Document Center
        </Link>
        <Link to="/people" className="menu-item">
          <i className="fas fa-user" style={{ marginRight: "10px" }}></i> People
        </Link>
        <Link to="/helpdesk" className="menu-item">
          <i className="fas fa-life-ring" style={{ marginRight: "10px" }}></i>{" "}
          Helpdesk
        </Link>
        <Link to="/workflow" className="menu-item">
          <i
            className="fas fa-exchange-alt"
            style={{ marginRight: "10px" }}
          ></i>{" "}
          Workflow Delegates
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
