import React from "react";
import "./AdminFixed.css";
import logo from "../logos/logo.png";
import user from "../logos/user.png";
import plus from "../logos/plus.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const AdminFixed = () => {
	return (
		<div className="admin-fixed-container">
			<div className="img-container">
				<Link to="/">
					<img src={logo} alt="" width={202} height={60} />
				</Link>
			</div>
			<div className="content d-flex  align-items-center">
				<div>
					<img src={user} alt="" width={17} height={17} />
				</div>
				<span className="p-0">
					<Link
						to="user-list"
						style={{ textDecoration: "none", color: "#111111" }}
					>
						Volunteer register list
					</Link>
				</span>
			</div>
			<div className="content d-flex  align-items-center my-4">
				<div>
					{/* <img src={plus} alt="" width={17} height={17} /> */}
					<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
				</div>
				<span className="p-0" style={{ color: "#207FEE" }}>
					<Link to="add-event" style={{ textDecoration: "none" }}>
						Add Event
					</Link>
				</span>
			</div>
		</div>
	);
};

export default AdminFixed;
