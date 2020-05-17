import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import youtube from "./apis/youtube";

const KEY = "AIzaSyAthC2h_xMKBwoYFb2hmTv-EbunOMBfWXI";

class App extends React.Component {
  onTermSubmit = async (term) => {
    var res = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });

    console.log(res);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
