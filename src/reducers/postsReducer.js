export const initialState = {
	posts: [],
	loading: false,
	hasErrors: false,
}

// Standard function syntax of postReducer.
export default function postsReducer(state = initialState, action) {
	switch(action.type) {
		

		default:
			return state;
	}
}