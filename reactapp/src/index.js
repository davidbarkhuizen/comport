import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import logo_img from './logo.80.png'

import things from './model.json'

// ========================================

function buildModel(things) {

	var tags = things
		.map((thing) => thing.tags)
		.reduce((a,b) => a.concat(b), [])
		.filter((x, i, a) => a.indexOf(x) === i)

	return {
		tags: tags
	}
}

// ========================================

class SearchTag extends React.Component {

	render() {
		return (
			<button 
				onClick={this.props.onClick}
				className="font-normal tag-button"
			>{this.props.tag}</button>
		)
	}
}

// ========================================


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

// ========================================

class SearchBox extends React.Component {

	render() {
		return (
			<input
				className="font-normal"
				value={this.props.searchText} 
				onChange={evt => this.props.onSearchTextChanged(evt)}
				placeholder="search..."
			/>
		)
	}
}

// ========================================

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

// ========================================

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

// =======================================

class Search extends React.Component {

	constructor(props) {

		super(props)

		this.state = {
			searchText: '',
			searchResults: this.props.data
		}
	}

	search = (things, token) => {

		function strip(x) {
			//console.dir(s)

			x = (x === null)
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

				if (candidateTag == tag)
					matches = true
			})

			return matches
		})
	}

	handleSearchTextChanged = (evt) => {

		const searchText = evt.target.value
		const searchResults = this.search(this.props.data, searchText)

		const newState = Object.assign({}, this.state, {searchText:searchText, searchResults:searchResults})
		this.setState(newState)
	}

	handleSearchTagClicked = (tag) => {

		const searchResults = this.searchOnTag(this.props.data, tag)

		const newState = Object.assign({}, this.state, {searchText:'', searchResults:searchResults})
		this.setState(newState)
	}

	render() {
		return (
			<div>	
				<div>
					<SearchTagCloud
						tags={this.props.tags}
						handleTagClicked={this.handleSearchTagClicked}
						className="two-thirds-width"
					/>
				</div>	
				<div className="margin">	
					<SearchBox
						searchText={this.state.searchText}
						onSearchTextChanged={this.handleSearchTextChanged}
						className="full-width"
					/>
				</div>
				<div>
					<div>search results</div>
					<SearchResults
						results={this.state.searchResults}
					/>
				</div>
			</div>
		)
	}
}

// ========================================

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