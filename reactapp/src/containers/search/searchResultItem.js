import { connect } from 'react-redux'

import { setDirectorySelectedItem } from '../../actions.js'

import { default as SummaryItemComponent } from '../../components/summaryItem.js'

const mapStateToProps = (state, ownProps) => {

	console.log(ownProps)

	return {
		item: ownProps.item
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {

	return {
		onClick: () => {
			dispatch(setDirectorySelectedItem(ownProps.item.id))
		}
	}
}

const SearchResultItem = connect(mapStateToProps, mapDispatchToProps)(SummaryItemComponent)
export default SearchResultItem