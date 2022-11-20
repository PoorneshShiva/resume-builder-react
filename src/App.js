import React from "react";
import "./App.css";
import Template1 from "./Components/Templates/Template1";
import Template2 from "./Components/Templates/Template2";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			color: "#299dfb",
			temp: "1",
		};
	}

	// componentDidMount() {
	// 	const rightContainer = [
	// 		<PersonalDetails />,
	// 		<Achievements />,
	// 		<Skills />,
	// 		<Qualities />,
	// 		<Hobbies />,
	// 	];
	// }

	render() {
		// this.forceUpdate;
		// console.log(
		// this.state.rightContainer.map((each) => {
		// 	return (
		// 		<each
		// 			temp={this.state.temp}
		// 			color={this.state.color}
		// 		/>
		// 	);
		// });
		// );
		// console.log(
		// 	<Education
		// 		maxwidth={this.state.left}
		// 		temp={this.state.temp}
		// 		color={this.state.color}
		// 	/>
		// );
		const template = (temp) => {
			console.log(temp);
			switch (temp) {
				case "1":
					return (
						<Template1
							color="#299dfb"
							temp="1"
						/>
					);
				case "2":
					return (
						<Template2
							color={this.state.color}
							temp={this.state.temp}
						/>
					);
				default:
					return <Template1 />;
			}
		};
		return (
			<div className="">
				<div className="resume-container">{template(this.state.temp)}</div>
			</div>
		);
	}
}
export default App;
