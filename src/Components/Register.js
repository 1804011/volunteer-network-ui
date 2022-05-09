import React from "react";
import "./Register.css";
import logo from "../logos/logo.png";
import { Link } from "react-router-dom";
const Register = () => {
	return (
		<div className="register-container">
			<div className="logo d-flex justify-content-center">
				<Link to="/">
					<img src={logo} alt="" width={202} height={60} />
				</Link>
			</div>
			<div className="registration-form">
				<h2>Register as a Volunteer</h2>
				<form className="form">
					<input type="text" name="name" id="" placeholder="Full Name" />
					<input
						type="email"
						name="email"
						id=""
						placeholder="User Name Or Email"
					/>
					<input type="date" name="date" id="" placeholder="Date" />
					<input
						type="text"
						name="description"
						id=""
						placeholder="Description"
					/>
					<input
						type="text"
						name="organize"
						id=""
						placeholder="Organize books at the library."
					/>
					<input type="submit" value="Register" />
				</form>
			</div>
		</div>
	);
};

export default Register;
