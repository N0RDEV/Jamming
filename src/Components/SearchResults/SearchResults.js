import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults(props) {
  return (
    <div>
      {userSearchResult.map((track) => (
        <div key={track.id}>
          <h2>{track.name}</h2>
          <p>{track.artist}</p>
          <p>{track.album}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;