import React, { useEffect, useState } from "react";

function App() {
	const [userData, setUserData] = useState([]);

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
	return <div className="App">hi</div>;
}

export default App;
