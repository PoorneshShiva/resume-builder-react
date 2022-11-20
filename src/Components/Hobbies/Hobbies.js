import React from "react";
import "./Hobbies.css";
import { BsArrowRight } from "react-icons/bs";
const Hobbies = ({ color, temp }) => {
	const hobbiesList = [
		"Playing Piano",
		"Reading Books",
		"Programming",
		"Listening to Podcast",
	];
	const styles = {
		1: {
			"hobbies-container": {
				/* font-size: 10px; */

				margin: " 15px 2px 0 10px",
				/* border-bottom: 1px solid grey; */
				paddingBottom: "20px",
			},
			title: {
				display: " inline",
				fontSize: " 20px",
				color: color,
			},
			hobbies: {
				fontSize: " 11px",
			},
		},
	};
	const templates = {
		1: (
			<div
				className="hobbies-container"
				style={styles[temp]["hobbies-container"]}>
				<p
					className="title"
					style={styles[temp]["title"]}>
					Hobbies
				</p>
				<div
					className="hobbies"
					style={styles[temp]["hobbies"]}>
					{hobbiesList.map((hobby) => (
						<p
							className="hobby"
							style={styles[temp]["hobby"]}>
							<BsArrowRight color={color} />
							&nbsp; {hobby}
						</p>
					))}
				</div>
			</div>
		),
	};
	return templates[temp];
};

export default Hobbies;
