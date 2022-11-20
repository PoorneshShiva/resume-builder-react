import React from "react";
// import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
const Qualities = ({ color = "#299dfb", temp, last }) => {
	const qualitiesList = [
		"Playing Piano",
		"Reading Books",
		"Programming",
		"Listening to Podcast",
	];
	const styles = {
		1: {
			"qualities-container": {
				/* font-size: 10px; */

				margin: "15px 2px 0 10px",
				borderBottom: "1px solid grey",
				paddingBottom: "20px",
			},
			title: {
				display: "inline",
				fontSize: "20px",
				color: color,
			},
			qualities: {
				fontSize: "11px",
			},
		},
	};
	const templates = (temp) => {
		switch (temp) {
			case "1":
				return (
					<div
						className="qualities-container"
						style={styles[temp]["qualities-container"]}>
						<p
							className="title"
							style={styles[temp]["title"]}>
							Qualities
						</p>
						<div
							className="qualities"
							style={styles[temp]["qualities"]}>
							{qualitiesList.map((hobby) => (
								<p
									className="hobby"
									style={styles[temp]["hobby"]}>
									<BsArrowRight color={color} />
									&nbsp; {hobby}
								</p>
							))}
						</div>
					</div>
				);
			case "2":
				return <div>Qualities case 2</div>;
			default:
				return <div>default</div>;
		}
	};
	return templates(temp);
};

export default Qualities;
