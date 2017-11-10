import { connect } from 'react-redux'

import Konst from '../konst.js'
import { default as EventCalendarComponent } from '../components/eventcalendar.js'

const mapStateToProps = state => {

	return {
		isVisible: state.app.mode === Konst.AppMode.Calendar
	}
}

const mapDispatchToProps = dispatch => {

	return {
	}
}

const EventCalendar = connect(mapStateToProps, mapDispatchToProps)(EventCalendarComponent)

export default EventCalendar