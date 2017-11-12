import React from 'react';

// resources
//
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';
import logo_img from '../images/logo.80.png'

// components
//
import AppModeSelector from '../containers/appmodeselector.js'
import Search from '../containers/search/search.js'
import EventCalendar from '../containers/eventcalendar.js'

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const app = () => (
	<div>
		<hr className="two-thirds-width"/>
		<div>
			<div>vaal marina</div>
			<div>local businesses, activities and events</div>
		</div>
		<div className="margin"><img src={logo_img} alt="logo"/></div>
		<AppModeSelector/>
		<br/>
		<Search/>
		<EventCalendar/>
	</div>
)

export default app