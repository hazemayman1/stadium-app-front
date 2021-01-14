import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
//import { Link } from "react-router-dom";
import "./Home.css";
//import NavbarHome from "./NavbarComponent";
import Navbar from "./Navbar";

class Home extends Component {

	render() {
		return (
			<div className>

				<Navbar />

				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="content">
								<img src="https://upload.wikimedia.org/wikipedia/ar/archive/1/12/20180719183055%21Egyptian_Premier_League_logo.png" alt="" />
								<h1>Tazakiro</h1>
								<h3>Your home for match tickets</h3>
								<hr />
								<Link to = "/matches">
								<button id="getStarted" class="btn btn-success btn-lg"><i class="fas fa-futbol"></i> Browse Matches!</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Home