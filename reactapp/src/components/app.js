import React from 'react';

// components
//
import Search from './search/search.js'
import EventCalendar from './eventcalendar.js'
import AppModeSelector from './appmodeselector.js'

import Konst from '../konst.js'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';

import logo_img from '../images/logo.80.png'

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class App extends React.Component {

	constructor(props) {

		super(props)

		this.state = {
			appMode: Konst.AppMode.None
		}
	}

	handleAppModeChanged(newMode) {

		const newState = Object.assign({}, this.state, {appMode:newMode})
		this.setState(newState)
	}

	render() {
		return (
			<div>
				<hr className="two-thirds-width"/>
				<div>
					<div>vaal marina</div>
					<div>local businesses, activities and events</div>
				</div>
				<div className="margin"><img src={logo_img} alt="logo"/></div>
				<AppModeSelector mode={this.state.appMode} onModeSelected={(newMode) => { this.handleAppModeChanged(newMode) } } store={this.props.store}/>
				<br/>
				
				<Search 
					data={this.props.model.directory} 
					tags={this.props.model.tags} 
					isVisible={this.state.appMode === Konst.AppMode.Directory}
					store={this.props.store}
				/>
				<EventCalendar isVisible={this.state.appMode === Konst.AppMode.Calendar}/>
			</div>
		)
	}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export default App