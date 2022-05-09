import React from "react";
import "./Event.css";
import extraVolunteer from "../images/extraVolunteer.png";
const Event = ({ img, name, date }) => {
	return (
		<div className="event-container shadow d-flex">
			<img src={extraVolunteer} alt="volunteer" />
			<div className="detail">
				<h2>Humanity more</h2>
				<h6>29 sep, 2020</h6>
				<button>Cancel</button>
			</div>
		</div>
	);
};

export default Event;
