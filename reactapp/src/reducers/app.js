import ActionTypes from '../actionTypes.js'

import Konst from '../konst.js'

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

function appReducer(state = initialState(), action) {

	switch (action.type)
	{
		case ActionTypes.SET_APP_MODE:
			return Object.assign({}, state, { appMode: action.mode})
		case ActionTypes.SET_DIRECTORY_SEARCH_MODE:
		case ActionTypes.SET_DIRECTORY_SEARCH_TEXT:
		case ActionTypes.SET_DIRECTORY_SEARCH_TAG:
			return Object.assign({}, state, { directory: directory(state.directory, action)})
		default:
			return state		
	}
}

export { appReducer }