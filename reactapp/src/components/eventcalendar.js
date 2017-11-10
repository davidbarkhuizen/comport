import React from 'react'
import PropTypes from 'prop-types'

const eventCalendar = ({isVisible}) => (

	<div className={isVisible === true ? '' : 'hidden'}>	
		<div className="font-normal">event calendar</div>
	</div>
)

eventCalendar.propTypes = {
	isVisible: PropTypes.bool.isRequired
}

export default eventCalendar