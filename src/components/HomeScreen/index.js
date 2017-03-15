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

     this.state = { videos : []}

     YouTubeSearch({key: API_KEY, term : 'react JS'}, (videos) => {
        this.setState({videos})
     })
 }
 render() {
    const {videos} = this.state
    return (
      <div>
         <SearchBar />
         <VideoDetails video={this.state.videos[0]}/>
         <VideoList videos={videos}/>
      </div>
    );
  }
}
