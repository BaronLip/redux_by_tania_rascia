import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
	<nav>
		<section className="navbar">
			<Link to="/">Dashboard</Link>
			<Link to="/posts">Posts</Link>
		</section>
	</nav>
)

export default Navbar