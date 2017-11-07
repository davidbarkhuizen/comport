import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import logo_img from './logo.80.png'

import rawModel from './model.json'

import Search from './search.js'

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

class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		return (
			<div>
				<hr className="two-thirds-width"/>
				<div>
					<div>vaal marina</div>
					<div>community directory and events calendar</div>
				</div>
				<div className="margin"><img src={logo_img} alt="logo"/></div>
				<Search data={this.props.model.directory} tags={this.props.model.tags}/>
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