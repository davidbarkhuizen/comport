import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';

import Konst from '../konst.js'

import ActionTypes from '../actionTypes.js'

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class SearchModeSelector extends React.Component {

	caSET_DIRECTORY_SEARCH_MODE(mode) {

		return { type: ActionTypes.SET_DIRECTORY_SEARCH_MODE, mode}
	}

	onModeSelected(mode) {

		this.props.store.dispatch(this.caSET_DIRECTORY_SEARCH_MODE(mode))
		this.props.onModeSelected(mode)
	}

	render() {

		function buttonClass(isActive) {
			
			return (isActive === false)
				? "btn btn-default"
				: "btn btn-primary"
		}

		return (
			<div>
				<div>how would you like to find local business and activities?</div>
				<div>
					<a 
						className={buttonClass(this.props.mode === Konst.SearchMode.Word)} 
						role="button"
						onClick={() => this.onModeSelected(Konst.SearchMode.Word)}
					>search by word</a>
					&nbsp;
					<a 
						className={buttonClass(this.props.mode === Konst.SearchMode.Tag)} 
						role="button"
						onClick={() => this.onModeSelected(Konst.SearchMode.Tag)}
					>search by tag</a>
					<a 
						className={buttonClass(this.props.mode === Konst.SearchMode.List)} 
						role="button"
						onClick={() => this.onModeSelected(Konst.SearchMode.List)}
					>view all</a>
				</div>
			</div>
		)
	}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

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

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class SearchTagCloud extends React.Component {

	caSET_DIRECTORY_SEARCH_TAG(tag) {

		return { type: ActionTypes.SET_DIRECTORY_SEARCH_TAG, tag}
	}

	onTagSelected(tag) {

		this.props.store.dispatch(this.caSET_DIRECTORY_SEARCH_TAG(tag))
		this.props.handleTagClicked(tag)
	}

	renderTag(tag, handleClick) {
		return (
			<SearchTag
				key={tag}
				tag={tag}
				onClick={() => this.onTagSelected(tag)}
				isSelected={tag === this.props.selectedTag}
			/>
		);
	}

	render() {
		return (
			<div>
				<div>click on a tag</div>
				<div>
					{this.props.tags.map((tag) => this.renderTag(tag))}
				</div>
			</div>
		)
	}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class SearchBox extends React.Component {

	caSET_DIRECTORY_SEARCH_TEXT(text) {

		return { type: ActionTypes.SET_DIRECTORY_SEARCH_TEXT, text}
	}

	onSearchTextChanged(evt) {

		this.props.store.dispatch(this.caSET_DIRECTORY_SEARCH_TEXT(evt.target.value))
		this.props.onSearchTextChanged(evt)
	}

	render() {
		return (
			<div>
				<input
					className="font-normal"
					value={this.props.text} 
					onChange={evt => this.onSearchTextChanged(evt)}
					placeholder="enter search text..."
					autoFocus={this.props.mode === Konst.SearchMode.Word}
				/>
			</div>
		)
	}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class SearchResultItem extends React.Component {

	render() {
		return (
			<div className="summary-item half-width">
				<div className="font-normal">{this.props.thing.name}</div>
				<div>{this.props.thing.description}</div>
			</div>
			)
	}

}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class SearchResults extends React.Component {

	renderSearchResultItem(result, handleResultClicked) {
		return (
			<SearchResultItem
				key={result.id}
				thing={result}
				onClick={() => this.props.onSearchResultClicked(result)}
			/>
		);
	}

	render() {
		return (
			<div>
				{
					this.props.mode !== Konst.SearchMode.Tag
						? null
						: (this.props.tag.length > 0)
							? <div>results matching tag <span className="bootstrap-blue">{this.props.tag}</span></div>
							: <div>no tag selected, click on a tag</div>
				}
				{
					this.props.mode !== Konst.SearchMode.Word
						? null
						: (this.props.text.length > 0)
							? <div>results matching word <span className="bootstrap-blue">{this.props.text}</span></div>
							: <div>start typing to search</div>
				}
				<div>
					{
						(this.props.results.length > 0)
							? this.props.results.map((result) => this.renderSearchResultItem(result, this.props.handleResultClicked)) 
							: (this.props.mode !== Konst.SearchMode.None ? 'no matching results' : null)
					}
				</div>
			</div>
		)
	}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class Search extends React.Component {

	constructor(props) {

		super(props)

		this.state = {
			mode: Konst.SearchMode.None,
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

		switch(newState.mode) {
		    case Konst.SearchMode.Word:
		        newState.results = this.searchOnToken(this.props.data, newState.text)
		        break
		    case Konst.SearchMode.Tag:
		        newState.results = this.searchOnTag(this.props.data, newState.tag)
		        break
		    case Konst.SearchMode.List:
		    	newState.results = this.props.data
		    	break
		    default:
		        break
		}

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
		
		const showSearchTagCloud = this.state.mode === Konst.SearchMode.Tag
		const showSearchBox = this.state.mode === Konst.SearchMode.Word
		
		return (
			<div className={this.props.isVisible ? '' : 'hidden'}>	

				<div className="font-normal">businesses and activities</div>

				<SearchModeSelector
					mode={this.state.mode}
					onModeSelected={this.handleSearchModeChanged}
					store={this.props.store}
				/>

				<br/>
				
				{ 
					(!showSearchTagCloud) ? null : 
					<SearchTagCloud
						tags={this.props.tags}
						handleTagClicked={this.handleSearchTagClicked}
						className="two-thirds-width"
						selectedTag={this.state.tag}
						store={this.props.store}
					/>
				}
				{
					(!showSearchBox) ? null :
					<SearchBox
						text={this.state.text}
						onSearchTextChanged={this.handleSearchTextChanged}
						mode={this.state.mode}
						className="full-width"
						store={this.props.store}
					/>
				}
				
				<br/>
				
				<SearchResults
					mode={this.state.mode}
					text={this.state.text}
					tag={this.state.tag}
					results={this.state.results}
					onSearchResultClicked={this.handleSearchResultSelected}
				/>
			</div>
		)
	}
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export default Search