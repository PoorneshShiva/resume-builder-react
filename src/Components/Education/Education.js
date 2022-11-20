import React from "react";
import "./Education.css";

const Education = ({ color, temp }) => {
	const subjectList = [
		"C Programming and Data Structure",
		"Mathematics and Java Programming",
		"Python Programming and Database",
		"C# and Unix",
		"Artificial Intelligence and Cloud Computing",
		"Advance Java and Network Security",
	];
	const styles = {
		1: {
			"education-container": {
				margin: "15px 0 0 10px",
				borderBottom: "1px solid grey",
				paddingBottom: "10px",
				/* position: absolute; */
			},
			title: {
				/* margin-top: 10px; */
				display: "inline",
				fontSize: "20px",
				color: color,
			},
			degree: {
				display: "flex",
				justifyContent: "space-between",
				alignContent: "center",
				alignItems: "baseline",
				marginBottom: "-10px",
			},
			"degree-name": {
				/* display: inline; */
				fontSize: "10px",
				fontWeight: "650",
				marginBottom: "-6px",
			},
			"degree-duration": {
				display: "inline",
				fontSize: "10px",
				margin: "10px 5px",

				/* float: right; */
			},
			"university-name": {
				fontSize: "10px",
				display: " inline",
			},
			"education-subjects": {
				fontSize: "10px",
			},
			"subject-list": {
				paddingLeft: "15px",
			},
		},
	};

	const templates = {
		1: (
			<div
				className="education-container"
				style={styles[temp]["education-container"]}>
				<p
					className="title"
					style={styles[temp]["title"]}>
					Education
				</p>
				<div
					className="education"
					style={styles[temp]["education"]}>
					<div
						className="degree"
						style={styles[temp]["degree"]}>
						<div style={{ paddingRight: "40px" }}>
							<p
								className="degree-name"
								style={styles[temp]["degree-name"]}>
								Bachelor of Computer Applications
							</p>

							<span
								className="university-name"
								style={styles[temp]["university-name"]}>
								National college Jayanagar, Bangalore
							</span>
						</div>
						<span
							className="degree-duration"
							style={styles[temp]["degree-duration"]}>
							Jul 2018-Mar 2022
						</span>
					</div>
				</div>
				<div
					className="education-subjects"
					style={styles[temp]["education-subjects"]}>
					{}
					<ul
						className="subject-list"
						style={styles[temp]["subject-list"]}>
						{subjectList.map((each) => {
							return (
								<li
									className="subject"
									style={styles[temp]["subject"]}>
									{each}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		),
	};
	return templates[temp];
};

export default Education;
