import React from 'react'

import Konst from '../../konst.js'

import SearchResultItem from './searchresultitem.js'

class SearchResults extends React.Component {

	renderSearchResultItem(result, handleResultClicked) {
		return (
			<SearchResultItem
				key={result.id}
				thing={result}
				onClick={() => this.props.onSearchResultClicked(result)}
			/>
		);
	}

	render() {
		return (
			<div>
				{
					this.props.mode !== Konst.SearchMode.Tag
						? null
						: (this.props.tag.length > 0)
							? <div>results matching tag <span className="bootstrap-blue">{this.props.tag}</span></div>
							: <div>no tag selected, click on a tag</div>
				}
				{
					this.props.mode !== Konst.SearchMode.Word
						? null
						: (this.props.text.length > 0)
							? <div>results matching word <span className="bootstrap-blue">{this.props.text}</span></div>
							: <div>start typing to search</div>
				}
				<div>
					{
						(this.props.results.length > 0)
							? this.props.results.map((result) => this.renderSearchResultItem(result, this.props.handleResultClicked)) 
							: (this.props.mode !== Konst.SearchMode.None ? 'no matching results' : null)
					}
				</div>
			</div>
		)
	}
}

export default SearchResults