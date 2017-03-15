import React, { Component }   from 'react';
// same as Component = React.component

import SearchBar              from './SearchBar'
import YouTubeSearch          from 'youtube-api-search'
import VideoList              from './VideoList'
import VideoDetails            from './VideoDetails'

const API_KEY = 'AIzaSyBfAacE1EppLefqpzsmb_GRRq9XNS-RYUg'

export default class HomeScreen extends Component {
 constructor(props) {
     super(props)

     this.state = {
        videos          : [],
        selectedVideo   : null
     }
     this.videoSearch("React JS")
 }
 videoSearch(term) {
    YouTubeSearch({key: API_KEY, term : term}, (videos) => {
      this.setState({
          videos,
          selectedVideo : videos[0]
      })
    })
}
 render() {
    const {videos} = this.state
    return (
      <div>
         <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
         <VideoDetails video={this.state.selectedVideo}/>
         <VideoList
            videos={videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            />
      </div>
    );
  }
}
