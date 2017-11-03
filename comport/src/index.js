import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================

class SearchBox extends React.Component {

	constructor(props) {

		super(props)

		this.state = {
			searchString: ''
		}
	}

	updateInputValue(evt) {
    this.setState({
      searchString: evt.target.value
    });
  }

	render() {
		return (
				<input
					className="search-box normal-font" 
					value={this.state.searchString} 
					onChange={evt => this.updateInputValue(evt)}
				/>
		)
	}
}

// ========================================

class Search extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			searchText: ''
		}
	}

	render() {
		return (
			<div>
				<SearchBox/>
			</div>
		)
	}
}

// ========================================

ReactDOM.render(
	<Search />,
	document.getElementById('root')
);