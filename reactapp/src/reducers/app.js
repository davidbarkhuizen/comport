import { combineReducers } from 'redux'

import { ActionTypes } from '../actions.js'
import Konst from '../konst.js'

import search from '../logic/search.js'

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

import model from '../model.json'

function extractTagsFromData(data) {

	return data
		.map((item) => item.tags)
		.reduce((a,b) => a.concat(b), [])
		.filter((x, i, a) => a.indexOf(x) === i)
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function directorySearch(state, action, data) {

state = (state !== undefined)
	? state
	: {
		mode: Konst.SearchMode.None,
		text: '',
		tag: '',
		results: []				
	}

	switch (action.type)
	{
		case ActionTypes.SET_DIRECTORY_SEARCH_MODE:
			return Object.assign({}, state, { 
				mode: action.mode,
				results: search(data, action.mode, state.text, state.tag)  
			})
		case ActionTypes.SET_DIRECTORY_SEARCH_TEXT:
			return Object.assign({}, state, { 
				text: action.text,
				results: search(data, state.mode, action.text, state.tag)  
			})
		case ActionTypes.SET_DIRECTORY_SEARCH_TAG:
			return Object.assign({}, state, { 
				tag: action.tag,
				results: search(data, state.mode, state.text, action.tag)
			})
	}

	return state
}

function directory(state, action) {

	state = (state !== undefined)
		? state
		: {
			data: model.data,
			tags: extractTagsFromData(model.data),
			search: directorySearch(state, action, model.data)
		}

	switch (action.type)
	{
		case ActionTypes.SET_DIRECTORY_SEARCH_MODE:
		case ActionTypes.SET_DIRECTORY_SEARCH_TEXT:
		case ActionTypes.SET_DIRECTORY_SEARCH_TAG:
			return Object.assign({}, state, { search: directorySearch(state.search, action, state.data)})
	}

	return state
}

function app(state, action) {

	state = (state !== undefined)
		? state
		: { mode: Konst.AppMode.None }

	switch (action.type)
	{
		case ActionTypes.SET_APP_MODE:
			return Object.assign({}, state, { mode: action.mode})
	}

	return state
}

const rootReducer = combineReducers({
	app,
	directory
})

export { rootReducer }