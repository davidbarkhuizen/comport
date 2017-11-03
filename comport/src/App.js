import React from 'react';
import logo from './logo.80.png';
import './App.css';

class App extends React.Component {

	constructor(props) {

    super(props)
    
    this.state = {
    	searchText: ''
  	}
  }

	handleInput(evt) {
		console.log(evt)
		console.log(this.state.searchText)
	}

	handleSearchTextChanged(evt) {
		console.log(evt)
		console.log(evt.data)
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">community portal</h1>
				</header>
				<div className="padding20">
					<input id="search-box" className="search-box normal-font" onInput={this.handleInput} onChange={this.handleSearchTextChanged}/>
				</div>
			</div>
		);
	}
}

export default App;
