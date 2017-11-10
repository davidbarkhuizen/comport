import { connect } from 'react-redux'

import Konst from '../../konst.js'
import { default as SearchModeSelectorComponent } from '../../components/search/searchmodeselector.js'

import { setDirectorySearchMode } from '../../actions.js'

const mapStateToProps = state => {

	return {
		mode: state.directory.search.mode
	}
}

const mapDispatchToProps = dispatch => {

	return {
		onSearchModeSelected: mode => {
			dispatch(setDirectorySearchMode(mode))
		}
	}
}

const SearchModeSelector = connect(mapStateToProps, mapDispatchToProps)(SearchModeSelectorComponent)
export default SearchModeSelector