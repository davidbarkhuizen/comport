import React from 'react'
import PropTypes from 'prop-types'

import { ActionTypes } from '../actions.js'
import Konst from '../konst.js'

function buttonClass(isActive) {
	
	return (isActive === false)
		? "btn btn-default"
		: "btn btn-primary"
}

/*
class AppModeSelector extends React.Component {

	caSET_APP_MODE(mode) {

		return { type: ActionTypes.SET_APP_MODE, mode}
	}

	onAppModeChanged(mode) {

		this.props.store.dispatch(this.caSET_APP_MODE(mode))
		this.props.onModeSelected(mode)
	}

	render() {

		return (
			<div>
				<div>what are you looking for ?</div>
				<div>
					<a 
						className={buttonClass(this.props.mode === Konst.AppMode.Directory)} 
						role="button"
						onClick={() => this.onAppModeChanged(Konst.AppMode.Directory) }
					>businesses and activities</a>
					&nbsp;
					<a 
						className={buttonClass(this.props.mode === Konst.AppMode.Calendar)} 
						role="button"
						onClick={() => this.onAppModeChanged(Konst.AppMode.Calendar) }
					>calendar of events</a>
				</div>
			</div>
		)
	}
}
*/

const appModeSelector = ({mode, onAppModeSelected}) => (

	<div>
		<div>what are you looking for ?</div>
		<div>
			<a 
				className={buttonClass(mode === Konst.AppMode.Directory)} 
				role="button"
				onClick={() => onAppModeSelected(Konst.AppMode.Directory) }
			>businesses and activities</a>

			&nbsp;
			
			<a 
				className={buttonClass(mode === Konst.AppMode.Calendar)} 
				role="button"
				onClick={() => onAppModeSelected(Konst.AppMode.Calendar) }
			>calendar of events</a>
		</div>
	</div>
)

appModeSelector.propTypes = {

	mode: PropTypes.symbol.isRequired,
	onAppModeSelected: PropTypes.func.isRequired
}

export default appModeSelector