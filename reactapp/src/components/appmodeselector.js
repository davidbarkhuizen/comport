import React from 'react'

import ActionTypes from '../actionTypes.js'
import Konst from '../konst.js'

class AppModeSelector extends React.Component {

	caSET_APP_MODE(mode) {

		return { type: ActionTypes.SET_APP_MODE, mode}
	}

	onAppModeChanged(mode) {

		this.props.store.dispatch(this.caSET_APP_MODE(mode))
		this.props.onModeSelected(mode)
	}

	render() {

		function buttonClass(isActive) {
			
			return (isActive === false)
				? "btn btn-default"
				: "btn btn-primary"
		}
		
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

export default AppModeSelector