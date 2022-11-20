import React from "react";

const Achievements = ({ color = "#299dfb", temp }) => {
	const styles = {
		1: {
			"achievements-container": {
				margin: "15px 2px 0 10px",
			},
			title: {
				display: "inline",
				fontSize: "20px",
				color: color,
			},
			"achievements-body": { fontSize: "11px", margin: "5px 0 20px" },
		},
	};

	const templates = {
		1: (
			<div
				className="achievements-container"
				style={styles[temp]["achievements-container"]}>
				<p
					className="title"
					style={styles[temp]["title"]}>
					Achievements
				</p>
				<div
					className="achievements-body"
					style={styles[temp]["achievements-body"]}>
					An Enthusiastic Computer Science graduate with great time management
					good coordination with teammates, innovative- thinking for
					problem-solving Willing to learn every piece of detail. He Focuses on
					the domino effect to accomplish a goal.
				</div>
			</div>
		),
	};

	return templates[temp];
};

export default Achievements;
