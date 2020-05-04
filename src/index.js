// EXTERNAL IMPORTS:
import React from 'react'
import { render } from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
// // configureStore, from RTK, replaces createStore, thunk, and composeWithDevTools.
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

// LOCAL/INTERNAL IMPORTS:
import App from './App'
import rootReducer from './reducers'

// ASSETS:
import './index.css'

const store = configureStore({reducer: rootReducer})
// configureStore, from RTK, replaces createStore.
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)