import React from "react";

const Internship = ({ color = "blue", temp }) => {
	// quality  = [
	//     "Manage all phases of recruitment, including defining hiring management needs and posting positions.",
	//     "Support employee relocation by helping new hires with housing and school registrations.",
	//     "Coordinate the regional compensation workshop.",
	//     "Brainstorm ideas to create programs to attract highly sought-after job skills.",
	//     "Utilize social networks to find qualified candidates.",
	//     "Currently working with chief administrative officer to create new leadership development program",
	// ]
	const internshipList = {
		1: {
			name: "CEO",
			startDate: "Feb 2020",
			endDate: "Feb 2021",
			company: "Google",
			city: "Bangalore",
		},
		2: {
			name: "aO",
			startDate: "Feb 2020",
			endDate: "Feb 2021",
			company: "Google",
			city: "Bangalore",
		},
	};

	const numberOfJobs = Array(Object.keys(internshipList).length).fill("0");

	const styles = {
		1: {
			"internship-container": {
				margin: "15px 0 0 10px",
				borderBottom: "1px solid grey",
				paddingBottom: "20px",
				/* position: absolute; */
			},
			title: {
				/* margin-top: 10px; */
				display: "inline",
				fontSize: "20px",
				color: color,
			},
			jobs: {
				display: "flex",
				justifyContent: "space-between",
				alignContent: "center",
				alignItems: "baseline",
				marginBottom: "-10px",
			},
			"job-position": {
				/* display: inline; */
				fontSize: "11px",
				fontWeight: "650",
				marginBottom: "-8px",
			},
			"internship-duration": {
				display: "inline",
				fontSize: "10px",
				margin: "10px 5px",

				/* float: right; */
			},
			"job-location": {
				fontSize: "10px",
				display: " inline",
			},
		},
	};
	const templates = {
		1: (
			<div
				className="internship-container"
				style={styles[temp]["internship-container"]}>
				<p
					className="title"
					style={styles[temp]["title"]}>
					Internship
				</p>
				<div
					className="internship"
					style={styles[temp]["internship"]}>
					{numberOfJobs.map((each, index) => {
						console.log(internshipList[index + 1]["name"]);
						return (
							<div
								className="jobs"
								style={styles[temp]["jobs"]}>
								<div style={{ paddingRight: "40px" }}>
									<p
										className="job-position"
										style={styles[temp]["job-position"]}>
										{internshipList[index + 1]["name"]}
									</p>

									<span
										className="job-location"
										style={styles[temp]["job-location"]}>
										{internshipList[index + 1]["city"]}
									</span>
								</div>
								<span
									className="internship-duration"
									style={styles[temp]["internship-duration"]}>
									{`${internshipList[index + 1]["startDate"]}-${
										internshipList[index + 1]["endDate"]
									}`}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		),
	};
	return templates[temp];
};

export default Internship;
