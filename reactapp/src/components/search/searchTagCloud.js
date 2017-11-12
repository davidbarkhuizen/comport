import React from 'react'

import SearchTag from '../../containers/search/searchTag.js'

const SearchTagCloud = ({tags, isVisible}) => (
	<div className={isVisible ? '' : 'hidden'}>
		<div>click on a tag</div>
		<div>
			{tags.map((tag) => (
				<SearchTag tag={tag} key={tag}/>
			))}
		</div>
	</div>
)

export default SearchTagCloud