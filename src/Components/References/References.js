import React from "react";

const References = ({ color, temp }) => {
	console.log((color = "#299dfb"), temp);
	const styles = {
		1: {
			"references-container": {
				margin: "15px 0 0 10px",
				paddingBottom: "20px",
				borderBottom: "1px solid black",
			},
			title: {
				display: "inline",
				fontSize: "20px",
				color: color,
			},
			"reference-contact": {
				display: "flex",
				fontSize: "11px",

				margin: "0 0px  20px 0",
			},
			"organization-details": {
				display: "flex",
				fontSize: "11px",
			},
		},
	};
	const templates = {
		1: (
			<div
				className="references-container"
				style={styles[1]["references-container"]}>
				<p
					className="title"
					style={styles[1]["title"]}>
					References
				</p>
				<div className="references">
					<div className="reference">
						<p
							className="reference-name"
							style={{ marginBottom: 0 }}>
							Prof. Shalini
						</p>
						<div
							className="organization-details"
							style={styles[temp]["organization-details"]}>
							<p
								className="organization"
								style={{ margin: "0 5px 0 0" }}>
								National College Jayanagar
							</p>
							<p
								className="organization-location"
								style={{ margin: "0 10px 0 0" }}>
								Bangalore
							</p>
						</div>

						<div
							className="reference-contact"
							style={styles[1]["reference-contact"]}>
							<p
								className="phone-number"
								style={{ margin: "0 10px 0 0" }}>
								+91 1082340120,
							</p>
							<p
								className="email"
								style={{ margin: "0 10px 0 0" }}>
								me@gmail.com
							</p>
						</div>
					</div>
				</div>
			</div>
		),
	};
	return templates[temp];
};

export default References;
