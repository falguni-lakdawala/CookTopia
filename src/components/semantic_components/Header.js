import React, { useContext } from "react";
import Navbar from "../composable-components/Navbar";
import { contextapp } from "../../pages/Page";

const rand = () => {
	return Math.floor(Math.random() * 1000)
};
const Header = () => {
	document.title = "Cooktopia"
	const navElements = [{ "text": "Recipes", "link": "/recipecontent","state":{id:rand()} }, { "text": "Shopping List", "link": "/shoppinglist","state":"" }, { "text": "Team", "link": "/team","state":"" }];

	const context = useContext(contextapp);
	// const parentcontext=useContext(contextapp);

	return (
		<>
			<header className="app_header">
				<div className="max-width-cont">
					<Navbar navElements={navElements} />
				</div>
			</header>
		</>
	);
};

export default Header;
