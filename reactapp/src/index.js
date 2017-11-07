import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import logo_img from './logo.80.png'

import rawModel from './model.json'

import Search from './search.js'
import EventCalendar from './eventcalendar.js'

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function buildModel(rawModel) {

	var tags = rawModel.directory
		.map((item) => item.tags)
		.reduce((a,b) => a.concat(b), [])
		.filter((x, i, a) => a.indexOf(x) === i)

	return {
		directory: rawModel.directory,
		tags: tags
	}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const AppMode = Object.freeze({
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

const model = buildModel(rawModel)

ReactDOM.render(
	<App model={model}/>,
	document.getElementById('root')
)