import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyC0zIhT3OPy0T0-bC5eUwp7y5CL4a5V3Iw';

YTSearch({key: API_KEY, term: 'macbook'}, function(data) {
	console.log(data);
})

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

// take this generated HTML into DOM
ReactDOM.render(<App />, document.querySelector('.container'));