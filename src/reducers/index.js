// EXTERNAL IMPORTS:
import { combineReducers } from 'redux'

// LOCAL/INTERNAL IMPORTS:
// This is what is missing from the walkthrough.
import postsReducer from '../slices/posts'
import postReducer from './postReducer'
import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({
	posts: postsReducer,
	post: postReducer,
	comments: commentsReducer
})

export default rootReducer