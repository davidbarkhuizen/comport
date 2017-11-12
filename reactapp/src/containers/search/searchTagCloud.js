import { connect } from 'react-redux'

import Konst from '../../konst.js'

import { default as SearchTagCloudComponent } 
	from '../../components/search/searchTagCloud.js'

const mapStateToProps = state => {

	return {

		tags: state.directory.tags,
		isVisible: state.directory.search.mode === Konst.SearchMode.Tag
	}
}

const mapDispatchToProps = dispatch => {

	return {
	}
}

const SearchTagCloud = connect(mapStateToProps, mapDispatchToProps)(SearchTagCloudComponent)
export default SearchTagCloud