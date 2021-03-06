import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
function Nav() {
	const link_style={
		color: 'white'
	};
  return (
    <nav>
			<ul className="nav-links">
			<Link style={link_style} to="/">
					<li>Home</li>
				</Link>
				<Link style={link_style} to="/about">
					<li>About</li>
				</Link>
				<Link style={link_style} to="/shop">
					<li>Shop</li>
				</Link>
			</ul>
		</nav>
  );
}

export default Nav;	
