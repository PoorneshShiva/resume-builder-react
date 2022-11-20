import React from "react";
import Header from "../Header/Header";
import Education from "../Education/Education";
import Course from "../Course/Course";
import Languages from "../Languages/Languages";
import Skills from "../Skills/Skills";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import Hobbies from "../Hobbies/Hobbies";
import Profile from "../Profile/Profile";
import Employment from "../Employment/Employment";
import Internship from "../Internships/Internships";
import Certificates from "../Certificates/Certificates";
import References from "../References/References";
import Qualities from "../Qualities/Qualities";
// import Achievements from "../Achievements/Achievements";
import Achievements from "../Achievements/Achievements";
import "./Template1.css";
// import { BsCheckLg } from "react-icons/bs";
const Template1 = (props) => {
	const leftContainer = [
		<Education
			color={props.color}
			temp={props.temp}
		/>,
		<Employment
			color={props.color}
			temp={props.temp}
		/>,
		<Course
			color={props.color}
			temp={props.temp}
		/>,

		<Internship
			color={props.color}
			temp={props.temp}
		/>,
		<Certificates
			color={props.color}
			temp={props.temp}
		/>,
		<References
			color={props.color}
			temp={props.temp}
		/>,
		<Profile
			// maxwidth={props.right}
			temp={props.temp}
			color={props.color}
		/>,
	];
	const rightContainer = [
		<PersonalDetails
			// maxwidth={props.right}
			temp={props.temp}
			color={props.color}
		/>,
		<Languages
			color={props.color}
			temp={props.temp}
		/>,
		<Achievements
			// maxwidth={props.right}
			temp={props.temp}
			color={props.color}
		/>,
		<Skills
			// maxwidth={props.right}
			temp={props.temp}
			color={props.color}
		/>,
		<Qualities
			last={true}
			// maxwidth={props.right}
			temp={props.temp}
			color={props.color}
		/>,
		<Hobbies
			// maxwidth={props.right}
			temp={props.temp}
			color={props.color}
		/>,
	];
	return (
		<div>
			<Header
				temp={props.temp}
				color={props.color}
			/>
			<div className="body-container">
				<div className="body-left-container">
					{leftContainer.map((each) => {
						return each;
					})}
					{/* <PersonalDetails
						// maxwidth={props.right}
						temp={props.temp}
						color={props.color}
					/> */}
					,
				</div>
				<div className="body-right-container">
					{rightContainer.map((each) => {
						return each;
					})}
				</div>
			</div>
		</div>
	);
};

export default Template1;
