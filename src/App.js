// EXTERNAL IMPORTS:
import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// LOCAL/INTERNAL IMPORTS:
import DashBoardPage from './pages/DashBoardPage';
import PostsPage from './pages/PostsPage';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={DashBoardPage} />
				<Route exact path="/posts" component={PostsPage} />
				<Redirect to="/" />
			</Switch>
		</Router>
	)
}

export default App