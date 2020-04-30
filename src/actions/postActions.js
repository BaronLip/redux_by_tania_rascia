// CREATING ACTION_TYPES:
// This is conventions that helps avoid typos.
// Honestly, it seems redundant.
export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

// CREATING ACTIONS:
export const getPosts = () => ({
	type: GET_POSTS,
})

export const getPostsSuccess = (posts) => ({
	type: GET_POSTS_SUCCESS,
	payload: posts
})

export const getPostsFailure = () => ({
	type: GET_POSTS_FAILURE,
})

// CREATING THE THUNK CALL BY COMBINING THE ACTIONS ABOVE:
export const fetchPosts = () => {
	return async dispatch => {
		dispatch(getPosts());

		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data = await response.json();

			dispatch(getPostsSuccess(data));
		} catch (error) {
			dispatch(getPostsFailure());
		}
	}
}