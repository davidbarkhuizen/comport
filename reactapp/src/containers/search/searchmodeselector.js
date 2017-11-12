import { connect } from 'react-redux'

import { setDirectorySearchMode } from '../../actions.js'
import { default as SearchModeSelectorComponent } from '../../components/search/searchmodeselector.js'

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