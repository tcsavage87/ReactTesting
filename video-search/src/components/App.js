import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube'
import React from 'react';

class App extends React.Component {

  // Default state to datatype you expect it to be

  state = { videos: [] };

  // API request is asynchronous operation
    // Asynchronous operations require promises or async/await
    // Async - designate function as async
    // Await - used to pause execution of function until promise is resolved, then returns value 
  
  onTermSubmit = async term => {

    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar 
          formSubmit={this.onTermSubmit}
        />
        I have {this.state.videos.length} results.
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


export default App;