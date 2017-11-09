// react
//
import React from 'react';
import ReactDOM from 'react-dom';

// redux
//
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rawModel from './model.json'

import App from './components/app.js'

import { rootReducer } from './reducers/app.js'

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function buildModel(rawModel) {

	var tags = rawModel.directory
		.map((item) => item.tags)
		.reduce((a,b) => a.concat(b), [])
		.filter((x, i, a) => a.indexOf(x) === i)

	return {
		directory: rawModel.directory,
		tags: tags
	}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const store = createStore(rootReducer)

const unsubscribe = store.subscribe(() => {

	const state = store.getState()
	console.log('state:')
	console.log(state)
})

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const model = buildModel(rawModel)

ReactDOM.render(
	<Provider store={store}>
		<App model={model} store={store}/>
	</Provider>,
	document.getElementById('root')
)