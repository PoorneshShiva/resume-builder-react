import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./PersonalDetails.css";

const PersonalDetails = ({ color, temp }) => {
	const styles = {
		1: {
			"personal-details-container": {
				margin: "15px 2px 0 10px",
			},
			title: { color: color },
			"dob-title": {
				fontSize: "14px",
				margin: "4px 0 -10px 0",
			},
			"nationality-title": {
				fontSize: "14px",
				margin: "4px 0 -10px 0",
			},
			"gender-title": {
				fontSize: "14px",
				margin: "4px 0 -10px 0",
			},
			dob: {
				fontSize: "12px",
			},
			gender: {
				fontSize: "12px",
			},
			nationality: {
				fontSize: "12px",
			},
		},
	};
	const templates = {
		1: (
			<div
				className="personal-details-container"
				style={styles[temp]["personal-details-container"]}>
				<p
					className="title"
					style={styles[temp]["title"]}>
					Personal Details
				</p>
				<div
					className="personal-details"
					style={styles[temp]["personal-details"]}>
					<div
						className="dob-details"
						style={styles[temp]["dob-details"]}>
						<p
							className="dob-title"
							style={styles[temp]["dob-title"]}>
							Date of Birth
						</p>
						<p
							className="dob"
							style={styles[temp]["dob"]}>
							May 14th, 2000
						</p>
					</div>
					<div
						className="gender-details"
						style={styles[temp]["gender-details"]}>
						<p
							className="gender-title"
							style={styles[temp]["gender-title"]}>
							Gender
						</p>
						<p
							className="gender"
							style={styles[temp]["gender"]}>
							Male
						</p>
					</div>
					<div
						className="nationality-details"
						style={styles[temp]["nationality-details"]}>
						<p
							className="nationality-title"
							style={styles[temp]["nationality-title"]}>
							Nationality
						</p>
						<p
							className="nationality"
							style={styles[temp]["nationality"]}>
							Indian
						</p>
					</div>
					<SocialMedia
						temp={temp}
						socialMediaList={[
							{
								name: "Linkden",
								url: "https://www.linkedin.com/in/poornesh-shiva-9529a0215/",
							},
						]}
					/>
				</div>
			</div>
		),
	};

	return templates[temp];
};

export default PersonalDetails;
