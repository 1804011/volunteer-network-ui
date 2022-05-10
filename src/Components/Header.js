import React from "react";
import {
	Button,
	Container,
	FormControl,
	InputGroup,
	Nav,
	Navbar,
} from "react-bootstrap";
import "./Header.css";
import logo from "../logos/logo.png";

import { Link } from "react-router-dom";
const Header = () => {
	return (
		<div className="header-container ">
			<Navbar collapseOnSelect expand="lg" variant="dark" className="p-0 m-0">
				<Container className="d-flex justify-content-center p-0 m-0 border">
					<Navbar.Brand as={Link} to="/" className="logo">
						<img src={logo} alt="" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto d-flex align-items-center">
							<Nav.Link as={Link} to="/" className="text-dark nav-link">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/donation" className="text-dark nav-link">
								Donation
							</Nav.Link>
							<Nav.Link as={Link} to="/events" className="text-dark nav-link">
								Events
							</Nav.Link>
							<Nav.Link as={Link} to="/blog" className="text-dark nav-link">
								Blog
							</Nav.Link>
							<Nav.Link as={Link} to="/register" className="text-dark nav-link">
								<Button variant="primary" className="nav-btn register">
									Register
								</Button>
							</Nav.Link>
							<Nav.Link as={Link} to="/admin" className="text-dark nav-link">
								<Button variant="dark" className="nav-btn px-4  admin">
									Admin
								</Button>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className="banner">
				<h1 className="banner-title">I grow by helping people in need.</h1>
				<InputGroup className="mb-3  w-25 mx-auto my-4">
					<FormControl
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
						className="search-bar"
					/>
					<Button variant="primary" id="button-addon2" className="search-btn">
						Search
					</Button>
				</InputGroup>
			</div>
		</div>
	);
};

export default React.memo(Header);
