import { connect } from 'react-redux'

import Konst from '../../konst.js'

import { setDirectorySearchText } from '../../actions.js'

import { default as Component } from '../../components/search/searchBox.js'

const mapStateToProps = state => {

	return {
		
		text: state.directory.search.text,
		isFocus: (state.directory.search.mode === Konst.SearchMode.Word),
		// && (state.app.mode === Konst.AppMode.Directory)
		isVisible: state.directory.search.mode === Konst.SearchMode.Word			
	}
}

const mapDispatchToProps = dispatch => {

	return {
		onChange: (text) => {
			dispatch(setDirectorySearchText(text))
		}
	}
}

const SearchBox = connect(mapStateToProps, mapDispatchToProps)(Component)
export default SearchBox