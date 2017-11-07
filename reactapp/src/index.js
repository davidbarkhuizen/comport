import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import logo_img from './logo.80.png'

import things from './model.json'

import Search from './search.js'

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function buildModel(things) {

	var tags = things
		.map((thing) => thing.tags)
		.reduce((a,b) => a.concat(b), [])
		.filter((x, i, a) => a.indexOf(x) === i)

	return {
		tags: tags
	}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const {tags} = buildModel(things)

ReactDOM.render(
	<div>
		<hr className="two-thirds-width"/>
		<div>
			<div>vaal marina</div>
			<div>community directory and events calendar</div>
		</div>
		<div className="margin"><img src={logo_img} alt="logo"/></div>
		<Search data={things} tags={tags}/>
	</div>,
	document.getElementById('root')
)