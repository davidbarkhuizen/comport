import { combineReducers } from 'redux'

import { ActionTypes } from '../actions.js'
import Konst from '../konst.js'

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

import model from '../model.json'

function extractTagsFromData(data) {

	return data
		.map((item) => item.tags)
		.reduce((a,b) => a.concat(b), [])
		.filter((x, i, a) => a.indexOf(x) === i)
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function directorySearch(state, action) {

	switch (action.type)
	{
		case ActionTypes.SET_DIRECTORY_SEARCH_MODE:
			return Object.assign({}, state, { mode: action.mode })
		case ActionTypes.SET_DIRECTORY_SEARCH_TEXT:
			return Object.assign({}, state, { text: action.text })
		case ActionTypes.SET_DIRECTORY_SEARCH_TAG:
			return Object.assign({}, state, { tag: action.tag })
		default:
			return state
	}
}

function directory(state, action) {

	state = (state !== undefined)
		? state
		: {
			data: model.data,
			tags: extractTagsFromData(model.data),
			search: {
				mode: Konst.SearchMode.None,
				text: '',
				tag: '',
				results: []				
			}
		}

	switch (action.type)
	{
		case ActionTypes.SET_DIRECTORY_SEARCH_MODE:
		case ActionTypes.SET_DIRECTORY_SEARCH_TEXT:
		case ActionTypes.SET_DIRECTORY_SEARCH_TAG:
			return Object.assign({}, state, { search: directorySearch(state.search, action)})
		default:
			return state		
	}
}

function app(state, action) {

	state = (state !== undefined)
		? state
		: { 
			mode: Konst.AppMode.None,
		}

	switch (action.type)
	{
		case ActionTypes.SET_APP_MODE:
			return Object.assign({}, state, { mode: action.mode})
		default:
			return state
	}
}

const rootReducer = combineReducers({
	app,
	directory
})

export { rootReducer }