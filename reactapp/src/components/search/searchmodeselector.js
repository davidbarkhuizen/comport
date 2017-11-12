import React from 'react'
import PropTypes from 'prop-types'

import Konst from '../../konst.js'

function buttonClass(isActive) {
	
	return (isActive === false)
		? "btn btn-default"
		: "btn btn-primary"
}

const SearchModeSelector = ({mode, onSearchModeSelected}) => (

	<div>
		<div>how would you like to find local business and activities?</div>
		<div>
			<a 
				className={buttonClass(mode === Konst.SearchMode.Word)} 
				role="button"
				onClick={() => onSearchModeSelected(Konst.SearchMode.Word)}
			>search by word</a>
			&nbsp;
			<a 
				className={buttonClass(mode === Konst.SearchMode.Tag)} 
				role="button"
				onClick={() => onSearchModeSelected(Konst.SearchMode.Tag)}
			>search by tag</a>
			<a 
				className={buttonClass(mode === Konst.SearchMode.List)} 
				role="button"
				onClick={() => onSearchModeSelected(Konst.SearchMode.List)}
			>view all</a>
		</div>
	</div>
) 

SearchModeSelector.propTypes = {
	onSearchModeSelected: PropTypes.func.isRequired
}

export default SearchModeSelector