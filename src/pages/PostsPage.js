// EXTERNAL IMPORTS:
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// // useDispatch & useSelector ARE REACT HOOKS THAT REPLACE CONNECT.
// * Import the connect function from react-redux.
// import { connect } from 'react-redux'

// LOCAL/INTERNAL IMPORTS:
import { fetchPosts, postsSelector } from '../slices/posts'
// fetchPosts is now imported from '..slices/posts'
// (Previously) import { fetchPosts } from '../actions/postActions'
import { Post } from '../components/Post'


const PostsPage = () => {
	const dispatch = useDispatch();
	const {posts, loading, hasErrors} = useSelector(postsSelector);
	// const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {

	// useEffect is similar to componentDidMount(), the action performs once the component is rendered.
	useEffect(() => {
		dispatch(fetchPosts())
		}, [dispatch]
	)

	const renderPosts = () => {
		if (loading) return <p>Loading posts...</p>
		if (hasErrors) return <p>Unable to display posts.</p>
		console.log(posts)
		return posts.map(post => <Post key={post.id} post={post}/>) 
	}


	return (
		<section>
		  	<h1>Posts</h1>
			{ renderPosts() }
		</section>
	)
}

export default PostsPage

//** Using mapStateToProps takes the states and attaches it to this component.
// Redux state is now in the props of this component by mapStateToProps.
// Longhand:
// const mapStateToProps = state => ({
// 	loading: state.posts.loading,
// 	posts: state.posts.posts,
// 	hasErrors: state.posts.hasErrors,
// })

// Shorthand option:
// const mapStateToProps = state => state.posts; 

// ** `connect` connects state/store to a component in conjunction with mapStateToProps.
// What this is saying is "Connect State, via mapStateToProps(),to PostsPage".
// export default connect(mapStateToProps)(PostsPage)