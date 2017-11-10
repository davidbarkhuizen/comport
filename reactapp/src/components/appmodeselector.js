import React from 'react'
import PropTypes from 'prop-types'

import Konst from '../konst.js'

function buttonClass(isActive) {
	
	return (isActive === false)
		? "btn btn-default"
		: "btn btn-primary"
}

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