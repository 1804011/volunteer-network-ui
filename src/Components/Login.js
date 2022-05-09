import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../logos/logo.png";
import google from "../logos/google.png";
import { Button } from "react-bootstrap";
const Login = () => {
	return (
		<div className="login-container">
			<div className="logo d-flex justify-content-center">
				<Link to="/">
					<img src={logo} alt="" width={202} height={60} />
				</Link>
			</div>
			<div className="login-box">
				<div className="login">
					<h2>Login With</h2>
					<button class="social-btn w-100 d-flex align-items-center">
						<div className="logo">
							<img src={google} width={32} height={32} alt="" />
						</div>
						<div className="text">Continue With Google</div>
					</button>
					<p className="register-link mt-1">
						<span>Don't have an account? </span>
						<span>
							<Link
								to="/register"
								style={{ textDecoration: "none", color: "#3f90fc" }}
							>
								Create an account
							</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
