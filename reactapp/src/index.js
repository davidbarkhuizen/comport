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


// ----------------------------------------

class SearchModeSelector extends React.Component {

	render() {

		function buttonClass(isActive) {
			
			return (isActive === false)
				? "btn btn-default"
				: "btn btn-primary"
		}

		return (
			<div>
				<div>how would you like to search ?</div>
				<div>
					<a 
						className={buttonClass(this.props.mode === 'word')} 
						role="button"
						onClick={() => this.props.onModeSelected('word')}
					>search by word</a>
					&nbsp;
					<a 
						className={buttonClass(this.props.mode === 'tag')} 
						role="button"
						onClick={() => this.props.onModeSelected('tag')}
					>search by tag</a>
				</div>
			</div>
		)
	}
}

// ----------------------------------------

class SearchTag extends React.Component {

	render() {

		function buttonClass(isActive) {
			
			return (isActive === false)
				? "btn btn-default search-tag"
				: "btn btn-primary search-tag"
		}

		return (
			<a 
				onClick={this.props.onClick}
				className={buttonClass(this.props.isSelected)}
				role="button"
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
				isSelected={tag === this.props.selectedTag}
			/>
		);
	}

	render() {
		return (
			<div>
				<div>click on tag</div>
				<div>
					{this.props.tags.map((tag) => this.renderTag(tag))}
				</div>
			</div>
		)
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
				placeholder="enter search text..."
				autoFocus={this.props.mode === 'word'}
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
		return (
			<div>
				{
					this.props.mode === "tag"
						? <div>results matching tag {this.props.tag}</div>
						: null
				}
				{
					this.props.mode === "word"
						? <div>results matching word {this.props.text}</div>
						: null
				}
				<div>
					{
						(this.props.results.length > 0)
							? this.props.results.map((result) => this.renderSearchResult(result, this.props.handleResultClicked)) 
							: 'none'
					}
				</div>
			</div>
		)
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
			results: []
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

		// no search token => 
		//
		if ((token === null) | (token === undefined) | (token.length === 0))
			return []

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
		
		const showSearchTagCloud = this.state.mode === 'tag'
		const showSearchBox = this.state.mode === 'word'
		
		return (
			<div>	
				<SearchModeSelector
					mode={this.state.mode}
					onModeSelected={this.handleSearchModeChanged}
				/>
				<br/>
				{ 
					(!showSearchTagCloud) ? null : 
					<SearchTagCloud
						tags={this.props.tags}
						handleTagClicked={this.handleSearchTagClicked}
						className="two-thirds-width"
						selectedTag={this.state.tag}
						/>
				}
				{
					(!showSearchBox) ? null :
					<SearchBox
						text={this.state.text}
						onSearchTextChanged={this.handleSearchTextChanged}
						mode={this.state.mode}
						className="full-width"/>
				}
				<SearchResults
					mode={this.state.mode}
					text={this.state.text}
					tag={this.state.tag}
					results={this.state.results}
				/>
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
	</div>,
	document.getElementById('root')
)