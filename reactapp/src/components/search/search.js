import React from 'react'
import PropTypes from 'prop-types'

import SearchModeSelector from '../../containers/search/searchmodeselector.js' 
import SearchTagCloud from '../../containers/search/searchTagCloud.js' 
import SearchBox from '../../containers/search/searchBox.js' 

/*
import SearchResults from './searchresults.js' 

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
		)
	}
}

*/

const Search = ({isVisible}) => (

	<div className={isVisible ? '' : 'hidden'}>	
		<div className="font-normal">businesses and activities</div>
		<br/>
		<SearchModeSelector/>
		<div className="margin">
			<SearchBox/>
			<SearchTagCloud/>
		</div>
	</div>
)

Search.propTypes = {
	isVisible: PropTypes.bool.isRequired
}

export default Search