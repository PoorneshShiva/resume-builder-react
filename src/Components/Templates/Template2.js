import React from "react";
import Education from "../Education/Education";
import Header from "../Header/Header";
import References from "../References/References";
import Achievements from "../Achievements/Achievements";
import Qualities from "../Qualities/Qualities";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import Profile from "../Profile/Profile";
import Certificates from "../Certificates/Certificates";
import Course from "../Course/Course";
import Skills from "../Skills/Skills"

const Template2 = ({ color = "rgb(49, 48, 48)", temp }) => {
	return (
		<div>
			<Header
				color={color}
				profession="Business Development Manager"
				temp={temp}
				name="John Doe"
				profileBody = "dspafdoj sdfjasodjf sodfjosdf o ojfosdfja fjo sdfoaojdf sj ojasfdo  jofsadjjjfoasj jojfsodjsf jasdghsdjfds fjspdjfpsd gjjpsadjf pah jjsfpsdf hgpasjd fppjfpasd fjspdfjs phgsdjfps dfjp"
			/>
			{/* e temp={temp} /> */}
		</div>
	);
};

export default Template2;
