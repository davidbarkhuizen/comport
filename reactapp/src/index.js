import React from 'react';
import ReactDOM from 'react-dom';

// redux
//
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rawModel from './model.json'

import App from './components/app.js'

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

const model = buildModel(rawModel)

ReactDOM.render(
	<App model={model}/>,
	document.getElementById('root')
)