import React from "react";
import "./UserList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const UserList = () => {
	return (
		<div className="user-list-container">
			<table>
				<tr className="header">
					<th>Name</th>
					<th>Email Id</th>
					<th>Registration date</th>
					<th>Volunteer list</th>
					<th>Action</th>
				</tr>
				<tr>
					<td>Sufi Ahmed Hamim</td>
					<td>sufi@gmail.com</td>
					<td>22-10-2020</td>
					<td>Organize books at the library.</td>
					<td>
						<span>
							<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
						</span>
					</td>
				</tr>
				<tr>
					<td>Sufi Ahmed Hamim</td>
					<td>sufi@gmail.com</td>
					<td>22-10-2020</td>
					<td>Organize books at the library.</td>
					<td>
						<span>
							<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
						</span>
					</td>
				</tr>
				<tr>
					<td>Sufi Ahmed Hamim</td>
					<td>sufi@gmail.com</td>
					<td>22-10-2020</td>
					<td>Organize books at the library.</td>
					<td>
						<span>
							<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
						</span>
					</td>
				</tr>
				<tr>
					<td>Sufi Ahmed Hamim</td>
					<td>sufi@gmail.com</td>
					<td>22-10-2020</td>
					<td>Organize books at the library.</td>
					<td>
						<span>
							<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
						</span>
					</td>
				</tr>
				<tr>
					<td>Sufi Ahmed Hamim</td>
					<td>sufi@gmail.com</td>
					<td>22-10-2020</td>
					<td>Organize books at the library.</td>
					<td>
						<span>
							<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
						</span>
					</td>
				</tr>
				<tr>
					<td>Sufi Ahmed Hamim</td>
					<td>sufi@gmail.com</td>
					<td>22-10-2020</td>
					<td>Organize books at the library.</td>
					<td>
						<span>
							<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
						</span>
					</td>
				</tr>
				<tr>
					<td>Sufi Ahmed Hamim</td>
					<td>sufi@gmail.com</td>
					<td>22-10-2020</td>
					<td>Organize books at the library.</td>
					<td>
						<span>
							<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
						</span>
					</td>
				</tr>
			</table>
		</div>
	);
};

export default UserList;
