//Packages
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTsearch from 'youtube-api-search';
import _ from 'lodash';

//Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//Constant
const API_KEY = 'AIzaSyARMe-LMvuuiCIzwV4GZcRC8K2-5ACJ-DI';

class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: [], selectedVideo: null };

		this.searchTermChangeVideo('wwe');
	}

	searchTermChangeVideo(term){
			YTsearch({ key: API_KEY, term: term }, videos => {
			this.setState({ videos, selectedVideo: videos[0] });
		});
	}

	render() {
		const VideoSearch = _.debounce((term) => this.searchTermChangeVideo(term), 300 );
		return (
				<div>
				<SearchBar searchTermChange={ (term) => VideoSearch(term) } />
				<VideoDetail videos={this.state.selectedVideo} />
				<VideoList videos={this.state.videos} onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }  />
				</div>
		);
	}

}

ReactDom.render(<App />, document.querySelector(".container"));
