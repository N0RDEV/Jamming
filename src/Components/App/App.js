import React, {useState} from "react";
import styles from "./App.module.css";
import SearchResults from "../SearchResults/SearchResults";
function App () {
  const [searchResults, setSearchResults] = useState([
    {
      name: "example track name 1",
      artist: "example track artist 1",
      album: "example track album 1",
      id: 1,
    },
    {
      name: "example track name 2",
      artist: "example track artist 2",
      album: "example track album 2",
      id: 2,
    }
  ]);
  const [playlistName, setPlaylistName] = useState("Example Playlist name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "example Playlist name 1",
      artist: "example Playlist artist 1",
      album: "example Playlist album 1",
      id: 1,
    },
    {
      name: "example Playlist name 1",
      artist: "example Playlist artist 1",
      album: "example Playlist album 1",
      id: 2,
    },
    {
      name: "example Playlist name 1",
      artist: "example Playlist artist 1",
      album: "example Playlist album 1",
      id: 3,
    },
  ])
    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          
          <div className={styles["App-playlist"]}>
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults usersearchResult={searchResults} />
            {/* <!-- Add a Playlist component --> */}
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
          </div>
        </div>
      </div>
        );
}

export default App;
