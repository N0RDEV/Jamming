import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";
function Tracklist (props) {
    return (
        <div className={styles.Tracklist}>
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {props.userSearchResults.map((track) => (
          <Track track={track} key={track.id} />
        ))}
        <li>Track 1</li>
        <li>Track 2</li>
        <li>track 3</li>
      </div>
    );
}

export default Tracklist;