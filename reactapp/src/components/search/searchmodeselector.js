import React from 'react'

import Konst from '../../konst.js'
import { ActionTypes } from '../../actions.js'

class SearchModeSelector extends React.Component {

	caSET_DIRECTORY_SEARCH_MODE(mode) {

		return { type: ActionTypes.SET_DIRECTORY_SEARCH_MODE, mode}
	}

	onModeSelected(mode) {

		this.props.store.dispatch(this.caSET_DIRECTORY_SEARCH_MODE(mode))
		this.props.onModeSelected(mode)
	}

	render() {

		function buttonClass(isActive) {
			
			return (isActive === false)
				? "btn btn-default"
				: "btn btn-primary"
		}

		return (
			<div>
				<div>how would you like to find local business and activities?</div>
				<div>
					<a 
						className={buttonClass(this.props.mode === Konst.SearchMode.Word)} 
						role="button"
						onClick={() => this.onModeSelected(Konst.SearchMode.Word)}
					>search by word</a>
					&nbsp;
					<a 
						className={buttonClass(this.props.mode === Konst.SearchMode.Tag)} 
						role="button"
						onClick={() => this.onModeSelected(Konst.SearchMode.Tag)}
					>search by tag</a>
					<a 
						className={buttonClass(this.props.mode === Konst.SearchMode.List)} 
						role="button"
						onClick={() => this.onModeSelected(Konst.SearchMode.List)}
					>view all</a>
				</div>
			</div>
		)
	}
}

export default SearchModeSelector