import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Events.css";
import Header from "./Header.js";
import logo from "../logos/logo.png";
import Event from "./Event";
const Events = () => {
	return (
		<div className="events-container">
			<div className="header">
				<Navbar collapseOnSelect expand="lg">
					<Container>
						<Navbar.Brand as={Link} to="/">
							<img src={logo} alt="logo" height={60} width={202}></img>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="ms-auto d-flex align-items-center">
								<Nav.Link as={Link} to="/" className="header-link">
									Home
								</Nav.Link>
								<Nav.Link as={Link} to="/donation" className="header-link">
									Donation
								</Nav.Link>
								<Nav.Link as={Link} to="/events" className="header-link">
									Events
								</Nav.Link>
								<Nav.Link as={Link} to="/blog" className="header-link">
									Blog
								</Nav.Link>
								<Nav.Link className="header-link">{"Sufi Rahman"}</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
			<div className="items-container">
				<Event></Event>
				<Event></Event>
				<Event></Event>
				<Event></Event>
			</div>
		</div>
	);
};

export default Events;
