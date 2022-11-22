import React from "react";
import "./Profile.css";
const Profile = ({ color, temp, maxwidth }) => {
	const styles = {
		1: {
			"profile-container": { maxWidth: maxwidth, margin: "15px 0 0 10px" },
			title: {
				display: "inline",
				fontSize: "20px",
				color: color,
			},
			"profile-body": { fontSize: "11px", margin: "5px 0 20px" },
		},
	};

	const templates = (temp) => {
		switch (temp){
			case "1":
				return (
					<div
						className="profile-container"
						style={styles[temp]["profile-container"]}>
						<p
							className="title"
							style={styles[temp]["title"]}>
							Profile
						</p>
						<div
							className="profile-body"
							style={styles[temp]["profile-body"]}>
							An Enthusiastic Computer Science graduate with great time management
							good coordination with teammates, innovative- thinking for
							problem-solving Willing to learn every piece of detail. He Focuses on
							the domino effect to accomplish a goal.
						</div>
					</div>
				)
			case "2":
				return <h1> Case 2 Profile</h1>
			default:
				return <h1> Defafult</h1>
		}
	
	};

	return templates(temp);
};

export default Profile;
