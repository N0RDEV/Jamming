import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";
function Tracklist(props) {
  return (
    <div className={styles.Tracklist}>
      {/* <!-- You will add a map method that renders a set of Track components  --> */}
      {props.userSearchResults && props.userSearchResults.map((track) => (
          <Track 
            track={track} 
            key={track.id} 
            isRemoval={props.isRemove} 
            onAdd={props.onAdd} 
            onRemove={props.onRemove}
            />
      ))}
        
    </div>
  );
}

export default Tracklist;