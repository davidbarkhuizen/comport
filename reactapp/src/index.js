// react
//
import React from 'react';
import ReactDOM from 'react-dom';

// redux
//
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// imp
//
import App from './containers/app.js'
import { rootReducer } from './reducers/app.js'

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const store = createStore(rootReducer)

const unsubscribe = store.subscribe(() => {

	const state = store.getState()
	console.log('state:')
	console.log(state)
})

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)