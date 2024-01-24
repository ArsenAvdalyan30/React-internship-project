import React from "react";

const SongRow = ({ song }) => {
  return (
    <>
      <p>{song.songName}</p>
      <p>{song.artistName}</p>
      <p>{song.trackNumber}</p>
    </>
  );
};
export default SongRow;
