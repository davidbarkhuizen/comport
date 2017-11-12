import { connect } from 'react-redux'

import { default as SearchResultsComponent } 
	from '../../components/search/searchResults.js'

const mapStateToProps = state => {

	return {
		mode: state.directory.search.mode, 
		tag: state.directory.search.tag, 
		text: state.directory.search.text,
		results: state.directory.search.results
	}
}

const mapDispatchToProps = dispatch => {

	return {
	}
}

const SearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchResultsComponent)
export default SearchResults