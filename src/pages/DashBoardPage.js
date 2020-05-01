// EXTERNAL IMPORTS:
import React from 'react'
import { Link } from 'react-router-dom'


const DashBoardPage = () => (
	<section>
		<h1>DashBoard</h1>
		<p>This is the DashBoard</p>

		<Link to="/posts" className="button">
			View Posts
		</Link>
	</section>
)

export default DashBoardPage
