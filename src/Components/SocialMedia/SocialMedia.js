/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsTypeH1 } from "react-icons/bs";
import "./SocialMedia.css";
const SocialMedia = ({ color, temp }) => {
	// const socialMediaList = props.socialMediaList;
	const styles = {
		1: {
			"social-media-container": {
				fontSize: "10px",

				margin: "15px 2 0 8px",
				borderBottom: "1px solid grey",
				paddingBottom: "20px",
			},
			title: {
				color: color,
				display: "inline",
				/* if body-right side the size goes to */
				fontSize: "20px",
				marginBottom: "-10px; }",
			},
			"social-media-title": {
				fontSize: "12px",
				marginBottom: "2px",
			},
			"social-media": {
				fontSize: "12px",
				textDecoration: "none",
				color: "black",
			},
		},
	};
	const templates = (temp) => {
		switch (temp){
			case "1":
				return (
					<div
						className="social-media-container"
						style={styles[temp]["social-media-container"]}>
						<div
							className="social-media-details"
							style={styles[temp]["social-media-details"]}>
							<p
								className="social-media-title"
								style={styles[temp]["social-media-title"]}>
								Linkden
							</p>
							<a
								href=""
								className="social-media"
								style={styles[temp]["social-media"]}>
								Poornesh Shiva
							</a>
						</div>
					</div>
				)
			case "2":
				return <h1> Case 2 Social Media</h1>
			default:
				return <h1> Default Social Media </h1>
		}
		
	};
	return templates(temp);
};

export default SocialMedia;
