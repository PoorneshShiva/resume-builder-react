import React from "react";
import BarLine from "../BarLine/BarLine";
import "./Skills.css";
const Skills = ({ color, temp }) => {
	const skillsList = [
		{ name: "Python Programming", level: "proficient" },
		{ name: "Javascript with React", level: "proficient" },
		{ name: "Linux with Bash Script", level: "intermediate" },
		{ name: "Adobe Photoshop", level: "intermediate" },
		{ name: "Adobe After Effects", level: "intermediate" },
	];
	const styles = {
		1: {
			"skills-container": {
				maxwidth: "200px",
				margin: "15px 2px 0 10px",
				borderBottom: "1px solid grey",
				paddingBottom: "20px",
			},
			title: {
				color: color,
				display: "inline",
				/* if body-right side the size goes to */
				fontsize: "20px",
			},
			"skill-name": {
				margin: " 3px 0",
				fontSize: "12px",
			},
		},
	};
	const templates = {
		1: (
			<div
				className="skills-container"
				style={styles[temp]["skills-container"]}>
				<p
					className="title"
					style={styles[temp]["title"]}>
					Skills
				</p>
				<div
					className="skills"
					style={styles[temp]["skills"]}>
					{skillsList.map((skill, index) => {
						return (
							<div
								className="skill"
								style={styles[temp]["skill"]}>
								<p
									className="skill-name"
									style={styles[temp]["skill-name"]}>
									{skill.name}
								</p>
								<BarLine
									key={index}
									color={color}
									level={skill.level}
								/>
							</div>
						);
					})}
				</div>
			</div>
		),
	};

	return templates[temp];
};

export default Skills;
