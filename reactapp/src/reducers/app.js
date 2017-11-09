import ActionTypes from '../actionTypes.js'

// (previousState, action) => newState

function appReducer(state, action) {

	console.log('action:')
	console.log(action)

	var newState;

	switch (action.type)
	{
		case ActionTypes.SET_APP_MODE:
			newState = Object.assign({}, state)
			newState.appMode = action.mode
			break
		case ActionTypes.SET_DIRECTORY_SEARCH_MODE:
			newState = Object.assign({}, state)
			newState.directory.search.mode = action.mode
			break
		case ActionTypes.SET_DIRECTORY_SEARCH_TEXT:
			newState = Object.assign({}, state)
			newState.directory.search.text = action.text
			break
		case ActionTypes.SET_DIRECTORY_SEARCH_TAG:
			newState = Object.assign({}, state)
			newState.directory.search.tag = action.tag
			break
		default:
			return state		
	}

	console.log('newState')
	console.log(newState)
	
	return newState
}

export { appReducer }