import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
//& styles
import "./styles/app.css";
//& icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
//& framer motion
import { motion } from "framer-motion";
//& animation
import { sectionAnimation } from "./animation";

function App() {
	const [userData, setUserData] = useState([]);
	const [users, setUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	//* componentDidMount
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("https://dummyapi.io/data/api/user", {
					headers: {
						"app-id": "60b6023c98e5768341aefad0",
					},
				});

				const data = await res.json();
				setUserData(data.data);
			} catch (err) {
				console.log("oops something went wrong " + err);
			}
		};

		fetchData();
	}, []);

	useEffect(() => setUsers(userData), [userData]);

	const onSubmitHandler = (e) => {
		e.preventDefault();

		let term = searchTerm;
		term = term.trim();

		if (term === "" || term === " ") return;

		const tempUsers = userData.filter((user) =>
			user.firstName.toLowerCase().includes(term)
		);
		setUsers(tempUsers);
		setSearchTerm("");
	};

	const onClickHandler = () => {
		setUsers(userData);
	};

	const renderUsers = () => {
		if (users) {
			if (users.length > 0)
				return users.map((user) => <UserCard user={user} key={user.id} />);
			else
				return (
					<div className="message">
						<h2>No such users found...</h2>
					</div>
				);
		}

		return (
			<div className="message">
				<h2>Loading</h2>
			</div>
		);
	};

	return (
		<div className="App">
			<nav>
				<h2 className="title">DigiRetail Users</h2>
				<form onSubmit={onSubmitHandler}>
					<FontAwesomeIcon
						className="undo-search"
						icon={faUndoAlt}
						onClick={onClickHandler}
					/>
					<input
						className="search-bar"
						placeholder={`search users... 🔍`}
						type="text"
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
					/>
				</form>
			</nav>
			<motion.section
				variants={sectionAnimation}
				initial="hidden"
				animate="show"
			>
				{renderUsers()}
			</motion.section>
		</div>
	);
}

export default App;
