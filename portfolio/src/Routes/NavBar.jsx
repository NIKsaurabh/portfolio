import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/nav.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

const NavBar = () => {

  return (
    <div className="fixed">
      <div className={window.innerWidth > 767 ? "px-5" : "px-2"}>
        <Navbar collapseOnSelect expand="lg" className={"p-0"}>
          <Navbar.Brand href="/" className="logo p-0">
            SK
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-4 nav-left-side">
              <Nav.Link href="#home" className="nav_item nav">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="nav_item">
                About
              </Nav.Link>

              <Nav.Link href="#skills" className="nav_item">
                Skills
              </Nav.Link>
              <Nav.Link href="#projects" className="nav_item">
                Projects
              </Nav.Link>
              <Nav.Link href="#achieved" className="nav_item">
                Achieved
              </Nav.Link>
              <Nav.Link href="#contact" className="nav_item">
                Contact
              </Nav.Link>
            </Nav>
            <Nav
              className={`ml-auto ${
                window.innerWidth > 767 ? "w-25" : "mt-5 w-100"
              }`}
            >
              <div className="d-flex justify-content-between w-100">
                <Nav.Link
                  href="https://www.linkedin.com/in/niksaurabh/"
                  className="nav_item cursor-pointer"
                  target="_blank"
                >
                  <LinkedInIcon />
                </Nav.Link>
                <Nav.Link
                  href="https://github.com/NIKsaurabh"
                  className="nav_item cursor-pointer"
                  target="_blank"
                >
                  <GitHubIcon />
                </Nav.Link>
                <Nav.Link
                  href="https://mindmyml.blogspot.com/" 
                  className="nav_item cursor-pointer"
                  target="_blank"
                >
                  <img src="/images/blog_icon.png" style={{width:"130%"}}/>
                </Nav.Link>
                <Nav.Link
                  href="https://medium.com/@NIKsaurabh" 
                  className="nav_item cursor-pointer"
                  target="_blank"
                >
                  <img src="/images/medium.png" style={{width:"85%"}}/>
                </Nav.Link>
                <Nav.Link
                  href="https://twitter.com/NIK_Saurabh_"
                  className="nav_item cursor-pointer"
                  target="_blank"
                >
                  <TwitterIcon />
                </Nav.Link>
                
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export {NavBar};
