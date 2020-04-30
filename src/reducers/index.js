// EXTERNAL IMPORTS:
import { combineReducers } from 'redux'

// LOCAL/INTERNAL IMPORTS:
import postsReducer from './postsReducer'

const rootReducer = combineReducers({
	posts: postsReducer,
})

export default rootReducer