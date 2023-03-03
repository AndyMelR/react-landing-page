import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";



//create your first component

const Home = () => {
	return (
		<>
		<div className="container-fluid">
			<Navbar/>
			<div id="container-body">
			<Jumbotron />
			<Cards />
			</div>
			<Footer />
    	</div>
		</>
	);
};


export  default  Home;

