import React from 'react';

// resources
//
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';
import logo_img from '../images/logo.80.png'

// components
//
import AppModeSelector from '../containers/appmodeselector.js'
import EventCalendar from '../containers/eventcalendar.js'

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const app = (appMode) => (
	<div>
		<hr className="two-thirds-width"/>
		<div>
			<div>vaal marina</div>
			<div>local businesses, activities and events</div>
		</div>
		<div className="margin"><img src={logo_img} alt="logo"/></div>
		<AppModeSelector/>
		<br/>
		<EventCalendar/>
	</div>
)

export default app

/*
	import Search from './search/search.js'
	
	<Search 
		data={directory} 
		tags={tags} 
		isVisible={appMode === Konst.AppMode.Directory}
		store={store}
	/>
*/