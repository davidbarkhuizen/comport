import React from 'react';
import ReactDOM from 'react-dom';

// redux
//
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rawModel from './model.json'

import App from './components/app.js'

import { appReducer } from './reducers/app.js'

import Konst from './konst.js'

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

function initialState() {

	return {
		appMode: Konst.AppMode.None,
		directory: {
			search: {
				mode: Konst.SearchMode.None,
				text: '',
				tag: '',
				results: []				
			}
		}
	}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const store = createStore(appReducer, initialState())

const unsubscribe = store.subscribe(() => {})

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const model = buildModel(rawModel)

ReactDOM.render(
	<App model={model} store={store}/>,
	document.getElementById('root')
)