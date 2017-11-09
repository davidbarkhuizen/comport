import React from 'react'

class SearchResultItem extends React.Component {

	render() {
		return (
			<div className="summary-item half-width">
				<div className="font-normal">{this.props.thing.name}</div>
				<div>{this.props.thing.description}</div>
			</div>
			)
	}
}

export default SearchResultItem