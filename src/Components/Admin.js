import React from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
import "./Admin.css";
import AdminContent from "./AdminContent";
import AdminFixed from "./AdminFixed";
const Admin = () => {
	return (
		<div className="admin-container d-flex">
			<AdminFixed></AdminFixed>
			<AdminContent></AdminContent>
		</div>
	);
};

export default Admin;
