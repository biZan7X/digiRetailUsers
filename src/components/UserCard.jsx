import React from "react";
//& styles
import "../styles/usercard.css";
//& icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const UserCard = ({ user }) => {
	return (
		<div className="user-card">
			<img className="user-image" src={user.picture} alt="user" />
			<div className="user-details">
				<h3>
					<span>Name:</span>
					{` ${user.firstName}`}
				</h3>
				<h3>
					<span>Email:</span>
					{` ${user.email}`}
				</h3>
			</div>
			<FontAwesomeIcon className="add-user" icon={faUserPlus} size="2x" />
		</div>
	);
};

export default UserCard;
