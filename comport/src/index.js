import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================

class SearchBox extends React.Component {

	render() {
		return (
				<input
					className="font-normal"
					value={this.props.searchText} 
					onChange={evt => this.props.onSearchTextChanged(evt)}
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

	handleSearchTextChanged = (evt) => {

		const newState = Object.assign({}, this.state, {searchText:evt.target.value})
		this.setState(newState)
	}

	render() {
		return (
			<div>
				<div className="font-normal">search</div>
				<div>
					<SearchBox
						searchText={this.state.searchText}
						onSearchTextChanged={this.handleSearchTextChanged}
					/>
				</div>
			</div>
		)
	}
}

// ========================================

ReactDOM.render(
	<Search />,
	document.getElementById('root')
);