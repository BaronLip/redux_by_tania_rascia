// EXTERNAL IMPORTS:
import React, { useEffect } from 'react'
// * Import the connect function from react-redux.
import { connect } from 'react-redux'

// LOCAL/INTERNAL IMPORTS:
import { fetchPosts } from '../actions/postActions'
import { Post } from '../components/Post'

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
	console.log(posts)
	
	useEffect(() => {
		dispatch(fetchPosts())
		}, [dispatch]
	)

	const renderPosts = () => {
		if (loading) return <p>Loading posts...</p>
		if (hasErrors) return <p>Unable to display posts.</p>
		return posts.map(post => <Post key={post.id} post={post}/>) 
	}


	return (
		<section>
		  	<h1>Posts</h1>
			{ renderPosts() }
		</section>
	)
}

//** Using mapStateToProps takes the states and attaches it to this component.
// Redux state is now in the props of this component by mapStateToProps.
// Longhand:
// const mapStateToProps = state => ({
// 	loading: state.posts.loading,
// 	posts: state.posts.posts,
// 	hasErrors: state.posts.hasErrors,
// })

// Shorthand option:
const mapStateToProps = state => state.posts; 

// ** `connect` connects state/store to a component in conjunction with mapStateToProps.
// What this is saying is "Connect State, via mapStateToProps(),to PostsPage".
export default connect(mapStateToProps)(PostsPage)