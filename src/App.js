import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
//& styles
import "./styles/app.css";
//& icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
	const [userData, setUserData] = useState([]);
	const [users, setUsers] = useState([]);

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

	const renderUsers = () => {
		if (users)
			return users.map((user) => <UserCard user={user} key={user.id} />);

		return <h2>Loading...</h2>;
	};

	return (
		<div className="App">
			<nav>
				<h2 className="title">DigiRetail Users</h2>
				<form>
					<FontAwesomeIcon
						className="search-icon"
						icon={faSearch}
						size="1x"
					/>
					<input className="search-bar" type="text" />
				</form>
			</nav>
			<section>{renderUsers()}</section>
		</div>
	);
}

export default App;
