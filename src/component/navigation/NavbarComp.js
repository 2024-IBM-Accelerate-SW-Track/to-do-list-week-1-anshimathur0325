import React, { Component } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'

import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Link
} from "react-router-dom"
import About from "../../pages/About";
import Home from "../../pages/Home";

export default class NavbarComp extends Component {
    render() {
        return (
            
            <Router>
            <div>
            <style type="text/css">
                        {`
                        .x {
                            background-color: lightblue !important;
                        }
                        `}
                    </style>
            <Navbar className="x" bg="dark" variant={"light"} expand="md">
                <Container>
                    <Navbar.Brand href="#home">Anshi's Todo List</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}> Home </Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            <div>
                <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                </Routes>
            </div>
            </Router>
        )
    }
}