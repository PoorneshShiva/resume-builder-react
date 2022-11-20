import React from "react";
import "./Course.css";
const Course = ({ color, temp }) => {
	// max name title 54
	const courseList = [
		{ name: "Udemy: Ethical Hacking from Scratch", date: "Jul 2020" },
		{
			name: "Udemy: Cisco Certified Network Associate (CCNA) ",
			date: "Dec 2021",
		},
		{ name: "Udemy: Linux with Bash Scripts", date: "Oct 2021" },
		{ name: "Udemy: Advanced Python Programming", date: "Apr 2022" },
		{ name: "Udemy: Web Development with Javascript", date: "May 2022" },
		{ name: "Udemy: Data Science", date: "Oct 2022" },
	];
	const styles = {
		1: {
			"course-container": {
				margin: "15px 0 0 10px",
				borderBottom: "1px solid grey",
				paddingBottom: "20px",
			},
			title: {
				display: "inline",
				fontSize: "20px",
				color: color,
			},
			course: {
				display: "flex",
				justifyContent: "space-between",
				fontSize: " 11px",
				paddingRight: "5px",

				marginBottom: "-15px",
			},
		},
	};
	const templates = {
		1: (
			<div
				className="course-container"
				style={styles[temp]["course-container"]}>
				<p
					className="title"
					style={styles[temp]["title"]}>
					Courses
				</p>
				<div
					className="courses"
					style={styles[temp]["courses"]}>
					{courseList.map((each) => {
						return (
							<div
								className="course"
								style={styles[temp]["course"]}>
								{" "}
								<p
									className="course-name"
									style={styles[temp]["course-name"]}>
									{each.name}
								</p>
								<p
									className="date"
									style={styles[temp]["date"]}>
									{each.date}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		),
	};

	return templates[temp];
};

export default Course;
