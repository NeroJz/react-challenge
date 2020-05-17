import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./VideoList/VideoList";

const KEY = "AIzaSyAthC2h_xMKBwoYFb2hmTv-EbunOMBfWXI";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
