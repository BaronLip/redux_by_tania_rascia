// EXTERNAL IMPORTS:
import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// LOCAL/INTERNAL IMPORTS:
import DashBoardPage from './pages/DashBoardPage';
import PostsPage from './pages/PostsPage';
import { Post } from './components/Post'
import SinglePostPage from "./pages/SinglePostPage";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={DashBoardPage} />
				<Route exact path="/posts" component={PostsPage} />
				<Route exact path="/posts/:id" component={SinglePostPage} />
				<Redirect to="/" />
			</Switch>
		</Router>
	)
}

export default App