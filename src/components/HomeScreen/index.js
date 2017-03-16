import React, { Component }   from 'react';
// same as Component = React.component

import SearchBar              from './SearchBar'
import YouTubeSearch          from 'youtube-api-search'
import VideoList              from './VideoList'
import VideoDetails           from './VideoDetails'
import _                      from 'lodash'
const API_KEY = 'AIzaSyBfAacE1EppLefqpzsmb_GRRq9XNS-RYUg'

export default class HomeScreen extends Component {
 constructor(props) {
     super(props)

     this.state = {
        videos          : [],
        selectedVideo   : null
     }
     this.videoSearch("flash")
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

   //  passing debounced version in search bar
   // call every 300 msec
    const videoSearch = _.debounce((term) => { this.videoSearch(term) },  1000 )
    const {videos} = this.state

    return (
      <div>
         <SearchBar onSearchTermChange={videoSearch}/>
         <VideoDetails video={this.state.selectedVideo}/>
         <VideoList
            videos={videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            />
      </div>
    );
  }
}
