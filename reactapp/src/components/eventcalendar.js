import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class EventCalendar extends React.Component {

	render() {
		return (
			<div className={this.props.isVisible ? '' : 'hidden'}>	
				<div className="font-normal">event calendar</div>
			</div>
		)
	}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export default EventCalendar