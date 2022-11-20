import React from "react";
import Education from "../Education/Education";
import Header from "../Header/Header";
import References from "../References/References";
import Achievements from "../Achievements/Achievements";
import Qualities from "../Qualities/Qualities";
import PersonalDetails from "../PersonalDetails/PersonalDetails";

const Template2 = ({ color = "rgb(49, 48, 48)", temp }) => {
	return (
		<div>
			<Header
				color={color}
				temp="2"
			/>
			<Education
				color={color}
				temp="2"
			/>
			<References
				color={color}
				temp="2"
			/>
			<Achievements
				color={color}
				temp="2"
			/>
			<Qualities
				color={color}
				temp="2"
			/>
			<PersonalDetails
				color={color}
				temp="2"
			/>
		</div>
	);
};

export default Template2;
