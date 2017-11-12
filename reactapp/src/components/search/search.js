import React from 'react'
import PropTypes from 'prop-types'

import SearchModeSelector from '../../containers/search/searchmodeselector.js' 
import SearchTagCloud from '../../containers/search/searchTagCloud.js' 
import SearchBox from '../../containers/search/searchBox.js' 
import SearchResults from '../../containers/search/searchResults.js'

const Search = ({isVisible}) => (

	<div className={isVisible ? '' : 'hidden'}>	
		<div className="font-normal">businesses and activities</div>
		<br/>
		<SearchModeSelector/>
		<div className="margin">
			<div>
				<SearchBox/>
				<SearchTagCloud/>
			</div>
			<div className="margin">
				<SearchResults/>
			</div>
		</div>
	</div>
)

Search.propTypes = {
	isVisible: PropTypes.bool.isRequired
}

export default Search