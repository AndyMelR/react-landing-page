import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";
import "../../styles/index.css";

//create your first component

const Home = () => {
	return (
		<>
			<div>
			<Navbar/>
			</div>
			<div class="container" id="container-body">
				<Jumbotron />
				<Cards />
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
};


export  default  Home;

