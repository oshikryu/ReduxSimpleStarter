import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar   from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const apiKey = 'AIzaSyD9M488fS-stUtKGYpOLExOfnqMfIxlR8A';

// make a new component that makes html
// take this generated html and put it on the page

// moving from functional to clas based component to keep track of state
// we do this to persist state through the component's lifecycle

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    }
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // this is a network request
    YTSearch({key: apiKey, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  // component renders regardless of YTSearch returning or not
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={(selectedVideo) => {
            this.setState({selectedVideo});
          }}
          videos={this.state.videos}/>
      </div>
    );
  }
}

/*
 * second arg is the existing html node to render TO
 * put it in the class="container" div
 * this is the root node of the entire react application
 */
ReactDOM.render(<App />, document.querySelector('.container'));
