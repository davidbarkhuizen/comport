import React from 'react'

import Konst from '../../konst.js'

import SearchResultItem from '../../containers/search/searchResultItem.js'

const renderSearchResultItem = (item) => (
	<SearchResultItem key={item.id} item={item}/>
)

const SearchResults = ({mode, tag, text, results}) =>  (

	<div>
		{
			mode !== Konst.SearchMode.Tag
				? null
				: (tag.length > 0)
					? <div>results matching tag <span className="bootstrap-blue">{tag}</span></div>
					: <div>no tag selected, click on a tag</div>
		}
		{
			mode !== Konst.SearchMode.Word
				? null
				: (text.length > 0)
					? <div>results matching word <span className="bootstrap-blue">{text}</span></div>
					: <div>start typing to search</div>
		}
		{
			mode !== Konst.SearchMode.List
				? null
				: (text.length > 0)
					? <div><span className="bootstrap-blue">all</span></div>
					: <div>all businesses and activities</div>
		}		
		<div>
			{
				(results && results.length > 0)
					? results.map((result) => renderSearchResultItem(result)) 
					: (mode !== Konst.SearchMode.None ? 'no matching results' : null)
			}
		</div>
	</div>
)

export default SearchResults