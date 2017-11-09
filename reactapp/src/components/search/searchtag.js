import React from 'react'

class SearchTag extends React.Component {

	render() {

		function buttonClass(isActive) {
			
			return (isActive === false)
				? "btn btn-default search-tag"
				: "btn btn-primary search-tag"
		}

		return (
			<a 
				onClick={this.props.onClick}
				className={buttonClass(this.props.isSelected)}
				role="button"
			>{this.props.tag}</a>
		)
	}
}

export default SearchTag