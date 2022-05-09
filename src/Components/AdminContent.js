import React from "react";
import { Route, Routes } from "react-router-dom";
import "./AdminContent.css";
import EventAdd from "./EventAdd";
import UserList from "./UserList";
const AdminContent = () => {
	return (
		<div className="admin-content-container">
			<h2>Add Event</h2>
			<div className="content">
				<Routes>
					<Route path="/" element={<EventAdd />}></Route>
					<Route path="add-event" element={<EventAdd></EventAdd>}></Route>
					<Route path="user-list" element={<UserList></UserList>}></Route>
					<Route path="*" element={<h2>404 Not found</h2>}></Route>
				</Routes>
			</div>
		</div>
	);
};

export default AdminContent;
