import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import logo_img from './logo.80.png'

import things from './model.json'

// ----------------------------------------

function buildModel(things) {

	var tags = things
		.map((thing) => thing.tags)
		.reduce((a,b) => a.concat(b), [])
		.filter((x, i, a) => a.indexOf(x) === i)

	return {
		tags: tags
	}
}

// ----------------------------------------

function buttonClass(isActive) {
	
	return (isActive === false)
		? "btn btn-default"
		: "btn btn-primary"
}

// ----------------------------------------

class SearchModeSelector extends React.Component {

	render() {
		return (
			<div>
				<div>would you like to search by word or by tag/category ?</div>
				<div>
					<a 
						className={buttonClass(this.props.mode === 'word')} 
						href="#" 
						role="button"
						onClick={() => this.props.onModeSelected('word')}
					>word</a>
					<a 
						className={buttonClass(this.props.mode === 'tag')} 
						href="#" 
						role="button"
						onClick={() => this.props.onModeSelected('tag')}
					>tag</a>
				</div>
			</div>
		)
	}
}

// ----------------------------------------

class SearchTag extends React.Component {

	render() {
		return (
			<a 
				onClick={this.props.onClick}
				className="btn btn-default"
				role="button"
				href="#"
			>{this.props.tag}</a>
		)
	}
}

// ----------------------------------------


class SearchTagCloud extends React.Component {

	renderTag(tag, handleClick) {
		return (
			<SearchTag
				key={tag}
				tag={tag}
				onClick={() => this.props.handleTagClicked(tag)}
			/>
		);
	}

	render() {
		return this.props.tags.map((tag) => this.renderTag(tag))
	}
}

// ----------------------------------------

class SearchBox extends React.Component {

	render() {
		return (
			<input
				className="font-normal"
				value={this.props.text} 
				onChange={evt => this.props.onSearchTextChanged(evt)}
				placeholder="search..."
			/>
		)
	}
}

// ----------------------------------------

class SummaryItem extends React.Component {

	render() {
		return (
			<div className="summary-item">
				<div>{this.props.thing.name}</div>
				<div>{this.props.thing.description}</div>
			</div>
			)
	}

}

// ----------------------------------------

class SearchResults extends React.Component {

	renderSearchResult(result, handleResultClicked) {
		return (
			<SummaryItem
				key={result.id}
				thing={result}
				onClick={() => this.props.handleResultClicked(result)}
			/>
		);
	}

	render() {
		return this.props.results.map((result) => this.renderSearchResult(result, this.props.handleResultClicked))
	}
}

// ----------------------------------------

class Search extends React.Component {

	constructor(props) {

		super(props)

		this.state = {
			mode: '',
			text: '',
			tag: '',
			results: this.props.data // default to full set
		}
	}

	handleSearchModeChanged = (newMode) => {

		const newState = Object.assign({}, this.state, {mode:newMode})
		this.researchAndSetState(newState)
	}

	searchOnToken = (things, token) => {

		function strip(x) {

			x = ((x === null) || (x === undefined))
				? ''
				: x.toString()

			return x.toString().trim().toLowerCase()
		}

		token = strip(token)

		return things.filter((thing,i,a) => {

			var matches = false

			Object.keys(thing).forEach(function(key,index) {

				if (strip(thing[key]).indexOf(token) !== -1)
					matches = true
			})

			return matches
		})
	}

	searchOnTag = (things, tag) => {

		return things.filter((thing,i,a) => {

			var matches = false

			thing.tags.forEach(function(candidateTag,index) {

				if (candidateTag === tag)
					matches = true
			})

			return matches
		})
	}

	researchAndSetState = (newState) => {

		newState.results = (newState.mode === 'word')
			? this.searchOnToken(this.props.data, newState.text)
			: this.searchOnTag(this.props.data, newState.tag)

		this.setState(newState)
	}

	handleSearchTextChanged = (evt) => {

		const newState = Object.assign({}, this.state, {text:evt.target.value})
		this.researchAndSetState(newState)
	}

	handleSearchTagClicked = (tag) => {

		const newState = Object.assign({}, this.state, {tag:tag})
		this.researchAndSetState(newState)
	}

	render() {
		return (
			<div>	
				<div>
					<SearchModeSelector
						mode={this.props.mode}
						onModeSelected={this.handleSearchModeChanged}
					/>
				</div>
				<div>
					<SearchTagCloud
						tags={this.props.tags}
						handleTagClicked={this.handleSearchTagClicked}
						className="two-thirds-width"
					/>
				</div>	
				<div>	
					<SearchBox
						text={this.state.text}
						onSearchTextChanged={this.handleSearchTextChanged}
						className="full-width"
					/>
				</div>
				<div>
					<div>search results</div>
					<SearchResults
						results={this.state.results}
					/>
				</div>
			</div>
		)
	}
}

// ----------------------------------------

const {tags} = buildModel(things)

ReactDOM.render(
	<div>
		<hr className="two-thirds-width"/>
		<div>community portal</div>
		<div className="margin"><img src={logo_img} alt="logo"/></div>
		<Search data={things} tags={tags}/>
		<hr className="half-width"/>
	</div>,
	document.getElementById('root')
)