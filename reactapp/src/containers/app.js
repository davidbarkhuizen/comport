import { connect } from 'react-redux'

import { default as appComponent } from '../components/app.js'

const mapStateToProps = state => {
	return {
		appMode: state.app.mode
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

const App = connect(mapStateToProps, mapDispatchToProps)(appComponent)

export default App