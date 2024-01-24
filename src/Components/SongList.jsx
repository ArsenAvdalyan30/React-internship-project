import React from "react";
import SongRow from "./SongRow";
import styles from "./SongList.module.css";

const SongList = ({ songs }) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Song Name</th>
          <th>Artist Name</th>
          <th>Track</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.trackNumber}>
            <td>
              <img src={"/proccessing.png"} alt="proccessing" />
              <img src={"/rightArrow2.png"} alt="arrow" />
            </td>
            <td>{song.songName}</td>
            <td>{song.artistName}</td>
            <td>{song.trackNumber}</td>
            <td>
              <img src={"/heart.png"} alt="" />
              <img src={"/checkMark.png"} alt="" />
              <img src={"/curvedArrow1.png"} alt="" />
              <img src={"/downArrow.png"} alt="" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  {
    /* {songs.map((song) => (
        <SongRow key={song.trackNumber} song={song} />
      ))} */
  }
};

export default SongList;
