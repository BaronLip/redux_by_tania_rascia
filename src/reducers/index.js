// EXTERNAL IMPORTS:
import { combineReducers } from 'redux'

// LOCAL/INTERNAL IMPORTS:
// This is what is missing from the walkthrough.
import postsReducer from '../slices/posts'

const rootReducer = combineReducers({
	posts: postsReducer,
})

export default rootReducer