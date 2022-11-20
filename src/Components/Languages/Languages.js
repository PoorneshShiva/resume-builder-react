import React from "react";
import BarLine from "../BarLine/BarLine";
import "./Languages.css";
const Languages = ({ color, temp }) => {
	const language_list = [
		{ name: "Tamil", level: "proficient" },
		{ name: "Kannada", level: "proficient" },
		{ name: "English", level: "intermediate" },
		{ name: "German", level: "naive" },
	];
	const styles = {
		1: {
			"languages-container": {
				margin: "15px 0 0 10px",
				borderBottom: "1px solid grey",
				paddingBottom: "20px",
			},
			title: { display: "inline", fontSize: "20px", color: color },
			languages: {
				display: " grid",
				gridTemplateColumns: " 1fr 1fr",
				columnGap: " 10px",
				rowGap: " 10px",
				paddingTop: " 8px",
			},
		},
	};
	const templates = {
		1: (
			<div
				className="languages-container"
				style={styles[temp]["languages-container"]}>
				<p
					className="title"
					style={styles[temp]["title"]}>
					Languages
				</p>
				<div
					className="languages"
					style={styles[temp]["languages"]}>
					{language_list.map((language, index) => {
						return (
							<div
								className="language"
								style={styles[temp]["language"]}>
								<div
									className="language-name"
									style={styles[temp]["language-name"]}>
									{language.name}
								</div>
								<BarLine
									key={index}
									level={language.level}
									color={color}
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

export default Languages;
