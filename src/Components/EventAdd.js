import React from "react";
import upload from "../logos/upload.png";
import "./EventAdd.css";
const EventAdd = () => {
	return (
		<div className="event-add">
			<div className="event-add-container">
				<form className="event-form" id="event-form">
					<div className="input-group">
						<label htmlFor="title">Event Title</label>
						<input
							type="text"
							name="title"
							id="title"
							placeholder="Enter title"
							required
						/>
					</div>
					<div className="input-group">
						<label htmlFor="date">Event Date</label>
						<input type="date" name="date" id="date" required />
					</div>
					<div className="input-group">
						<label htmlFor="description">Description</label>
						<textarea
							name="description"
							id="description"
							cols="30"
							rows="10"
							placeholder="Enter description"
						></textarea>
					</div>
					<div className="input-group">
						<label for="file-upload">Banner</label>
						<label for="file-upload" class="custom-file-upload">
							<img src={upload} height={24} width={24} alt="" />
							<span>Upload Image</span>
						</label>
						<input id="file-upload" type="file" className="d-none" />
					</div>
				</form>
			</div>
			<button type="submit" form="event-form">
				Submit
			</button>
		</div>
	);
};

export default EventAdd;
