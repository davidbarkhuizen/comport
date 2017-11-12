import { connect } from 'react-redux'

import { setDirectorySearchTag } from '../../actions.js'

import { default as TagComponent } from '../../components/tag.js'

const mapStateToProps = (state, ownProps) => {

	return {

		tag: ownProps.tag,
		isActive: ownProps.tag === state.directory.search.tag
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {

	return {
		onClick: () => {
			dispatch(setDirectorySearchTag(ownProps.tag))
		}
	}
}

const SearchTag = connect(mapStateToProps, mapDispatchToProps)(TagComponent)
export default SearchTag