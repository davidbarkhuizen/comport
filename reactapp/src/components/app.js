import React from 'react';

// components
//
import Search from './search.js'
import EventCalendar from './eventcalendar.js'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';

import logo_img from '../images/logo.80.png'

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const AppMode = Object.freeze(
{
    Calendar:   Symbol("calendar"),
    Directory:  Symbol("directory"),
    None: Symbol("none")
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class AppModeSelector extends React.Component {

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
						className={buttonClass(this.props.mode === AppMode.Directory)} 
						role="button"
						onClick={() => this.props.onModeSelected(AppMode.Directory)}
					>businesses and activities</a>
					&nbsp;
					<a 
						className={buttonClass(this.props.mode === AppMode.Calendar)} 
						role="button"
						onClick={() => this.props.onModeSelected(AppMode.Calendar)}
					>calendar of events</a>
				</div>
			</div>
		)
	}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			appMode: AppMode.None
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
				<AppModeSelector mode={this.state.appMode} onModeSelected={(newMode) => { this.handleAppModeChanged(newMode) } }/>
				<br/>
				
				<Search data={this.props.model.directory} tags={this.props.model.tags} isVisible={this.state.appMode === AppMode.Directory}/>
				<EventCalendar isVisible={this.state.appMode === AppMode.Calendar}/>
			</div>
		)
	}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export default App