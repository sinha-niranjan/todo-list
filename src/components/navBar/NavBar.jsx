import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
// importing assets
import logoDark from "../../assets/img/logo-dark.png";
import logoLight from "../../assets/img/logo-dark.png";

// imports from bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container className="navBar">
        <Link to="/" className="link link-brand">
          <img src={scrolled ? logoLight : logoDark} alt="" />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto m-5">
            <Link
              to="/"
              className={
                activeLink === "home"
                  ? "active navbar-link link"
                  : "navbar-link link"
              }
              onClick={() => setActiveLink("home")}
            >
              Home
            </Link>

            <Link
              to="/addTask"
              className={
                activeLink === "addTask"
                  ? "active navbar-link link"
                  : "navbar-link link"
              }
              onClick={() => setActiveLink("addTask")}
            >
              Add Task
            </Link>

            <Link
              to="/task"
              className={
                activeLink === "task"
                  ? "active navbar-link link"
                  : "navbar-link link"
              }
              onClick={() => setActiveLink("task")}
            >
              Tasks
            </Link>
            <Link
             to="/contact"
              className={
                activeLink === "contact" ? "active navbar-link link" : "navbar-link link"
              }
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
