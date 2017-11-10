import { connect } from 'react-redux'

import Konst from '../../konst.js'
import { default as SearchComponent } from '../../components/search/search.js'

const mapStateToProps = state => {

	return {
		isVisible: state.app.mode === Konst.AppMode.Directory
	}
}

const mapDispatchToProps = dispatch => {

	return {
	}
}

const Search = connect(mapStateToProps, mapDispatchToProps)(SearchComponent)

export default Search