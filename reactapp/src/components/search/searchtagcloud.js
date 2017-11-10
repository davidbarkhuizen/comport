import React from 'react'

import { ActionTypes } from '../../actions.js'

import SearchTag from './searchtag.js'

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

export default SearchTagCloud