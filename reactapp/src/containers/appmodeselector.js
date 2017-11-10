import { connect } from 'react-redux'

import { default as AppModeSelectorComponent } from '../components/appmodeselector.js'
import { setAppMode } from '../actions.js'

const mapStateToProps = state => {
	
	return {
		mode: state.app.mode
	}
}

const mapDispatchToProps = dispatch => {

	return {
		onAppModeSelected: mode => {
			dispatch(setAppMode(mode))
		}
	}
}

const AppModeSelector = connect(mapStateToProps, mapDispatchToProps)(AppModeSelectorComponent)

export default AppModeSelector