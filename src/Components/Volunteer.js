import React from "react";
import "./Volunteer.css";
const Volunteer = (props) => {
	const { img, title } = props.data;
	return (
		<div className="volunteer-container">
			<img src={img} width={270} height={320 - 80} alt="" />
			<button>{title}</button>
		</div>
	);
};

export default Volunteer;
