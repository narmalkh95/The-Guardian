import React from "react";
import { Link } from "react-router-dom";


class NavBar extends React.Component{
	render() {
		return (
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span> 
			      </button>
			      <Link className="navbar-brand" to="/">NEWS</Link>
			    </div>
			    <div className="collapse navbar-collapse" id="myNavbar">
			      <ul className="nav navbar-nav">
			        <li><Link to="/#">About</Link></li> 
			        <li><Link to="/#">More</Link></li> 
			      </ul>
			    </div>
			  </div>
			</nav>
			)
	}
};


export default NavBar;