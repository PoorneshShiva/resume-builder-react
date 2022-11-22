/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import "./Header.css";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import Profile from "../Profile/Profile";
const Header = ({ color = "#299dfb", temp,name ,profession,profileBody, email,number,location}) => {
	const headerDetails = {
		name: "Poornesh Shiva",
		designation: "FreeLance Software Developer",
		email: "poorneshshiva@gmail.com",
		number: "+91 9343306602",
		location: "Bangalore",
	};
	const styles = {
		1: {
			"header-container": {
				display: "flex",
				marginTop: "8px",
				marginBottom: "-8px",
				boxShadow: "-1px 1px 0",
				zIndex: "1",
			},

			name: {
				display: "inline",
				margin: "0px 0 0 20px",
				padding: "5px 0 0 0",
			},

			"job-title": {
				display: "inline-block",
				width: "300px",
				margin: "0px 0 0 20px",
			},

			"personal-information": {
				fontSize: "10px",
				margin: "3px 0 -10px 10px",

				display: "flex",
			},
			"contact-number": {
				padding: "0 10px 0 20px",
				fontSize: "10px",
			},
			email: {
				padding: "0 10px 0 20px",
				fontSize: "10px",
			},
			place: {
				padding: "0 10px 0 20px",
				fontSize: "10px",
			},
		},
	};
	const templates = (temp) => {
		switch (temp) {
			case "1":
				return (
					<div
						className="header-container"
						style={styles[temp]["header-container"]}>
						<div className="">
							<img
								src="/Images/myPhoto1.png"
								alt="your image"
								className="profilePicture"
								width="80px"
								height="100%"
							/>
						</div>
						<div
							style={{
								paddingTop: "15px",
								backgroundColor: color,
								zIndex: 20,
							}}>
							<h2
								className="name"
								style={styles[temp]["name"]}>
								{headerDetails.name}
							</h2>
							<p
								className="job-title"
								style={styles[temp]["job-title"]}>
								{headerDetails.designation}
							</p>
							<div
								className="personal-information"
								style={styles[temp]["personal-information"]}>
								<p
									className="email"
									style={styles[temp]["email"]}>
									<div
										className="email-icon"
										style={{ display: "inline-block", padding: 0 }}>
										<span>
											<MdEmail
												fontSize="7px"
												// paddingTop="5px"
											/>
										</span>
									</div>
									<div
										className="email"
										style={{ display: "inline-block" }}>
										{headerDetails.email}
									</div>
								</p>
								<p
									className="contact-number"
									style={styles[temp]["contact-number"]}>
									<MdCall fontSize="7px" />
									{headerDetails.number}
								</p>
								<p
									className="place"
									style={styles[temp]["place"]}>
									<MdLocationPin fontSize="7px" />
									{headerDetails.location}
								</p>
							</div>
						</div>
					</div>
				);
			case "2":
				return <div className="header-container" style={{backgroundColor: "#7a7676", padding:"0px 20px "}}>
						<h2  className="name" style={{color:"White",margin:0,paddingTop:"10px"}}>{name}</h2> 

						<p className="proffession" style={{color:"red",margin:"0px"}}>{profession}</p>
						<div className="profile-body">
								{profileBody}
								
						</div>
						<div className="personal-information-container" style={{background:"black"}}>
						
							<div className="email">
								email@gmail.com
							</div>
							<div className="phone-number"></div>
							<div className="location"></div>
							<div className="linkden"></div>
							<div className="skype"></div>

						</div>
				</div>;
			default:
				return <h1> Default</h1>;
		}
	};

	return templates(temp);
	// return template["2"];
};

export default Header;
