import * as actions from '../actions/postActions'

export const initialState = {
	posts: [],
	loading: false,
	hasErrors: false,
}

// Standard function syntax of postReducer.
// WHY CAN IT NOT BE A ARROW SYNTAX FUNCTION ASSIGNMENT?
// const postsReducer = (state = initialState, action) = {
export default function postsReducer(state = initialState, action) {
	switch (action.type) {
		case actions.GET_POSTS: // the same as `case "GET_POSTS"`
			return { ...state, loading: true };

		case actions.GET_POSTS_SUCCESS:
			return { posts: action.payload, loading: false, hasErrors: false };

		case action.GET_POSTS_FAILURE:
			return { ...state, loading: false, hasErrors: true };

		default:
			return state;
	}
}

// export default postsReducer