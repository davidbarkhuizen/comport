import React from 'react'

import Konst from '../../konst.js'
import ActionTypes from '../../actionTypes.js'

class SearchBox extends React.Component {

	caSET_DIRECTORY_SEARCH_TEXT(text) {

		return { type: ActionTypes.SET_DIRECTORY_SEARCH_TEXT, text}
	}

	onSearchTextChanged(evt) {

		this.props.store.dispatch(this.caSET_DIRECTORY_SEARCH_TEXT(evt.target.value))
		this.props.onSearchTextChanged(evt)
	}

	render() {
		return (
			<div>
				<input
					className="font-normal"
					value={this.props.text} 
					onChange={evt => this.onSearchTextChanged(evt)}
					placeholder="enter search text..."
					autoFocus={this.props.mode === Konst.SearchMode.Word}
				/>
			</div>
		)
	}
}

export default SearchBox