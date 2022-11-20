import React from "react";

const BarLine = (props) => {
	const level = props.level;
	// const level = "intermediate";
	let lineWidth = "0px";
	if (level === "naive") {
		lineWidth = "15%";
	} else if (level === "beginner") {
		lineWidth = "20%";
	} else if (level === "intermediate") {
		lineWidth = "50%";
	} else if (level === "proficient") {
		lineWidth = "75%";
	} else if (level === "expert") {
		lineWidth = "98%";
	}

	return (
		<div
			className="language-bar"
			style={{
				width: "90%",
				border: "0.5px solid grey",
				background: "grey",
			}}>
			<div
				style={{
					border: ` 1px solid ${props.color}`,
					width: lineWidth,
					backgroundColor: " rgb(0 72 255)",
					display: "absolute",
				}}></div>
		</div>
	);
};

export default BarLine;
