import React from "react";
import "./Volunteers.css";
import { useState, useEffect } from "react";
import Volunteer from "./Volunteer";
const Volunteers = () => {
	const [volunteers, setVolunteers] = useState([]);
	const key = 0;
	useEffect(() => {
		fetch("Volunteers.json")
			.then((res) => res.json())
			.then((data) => setVolunteers(data));
	}, []);
	return (
		<div className="volunteers-container">
			{volunteers.map((volunteer) => (
				<Volunteer data={volunteer}></Volunteer>
			))}
		</div>
	);
};

export default React.memo(Volunteers);
