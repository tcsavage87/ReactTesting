import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube'
import React from 'react';

class App extends React.Component {
  
  onTermSubmit = async term => {
    youtube.get('/search', {
      params: {
        q: term
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar 
          formSubmit={this.onTermSubmit}
        />
      </div>
    );
  }
}


export default App;