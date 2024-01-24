import React from "react";
import styles from "../App.module.css";

const AddAllButton = ({ onClick }) => {
  return (
    <button className={styles.buttonFormTrack} onClick={onClick}>
      <span className={styles.rightArrow}>&#129170;</span>
      <span className={styles.buttonFormSpan1}>Add All</span>
      <span className={styles.buttonFormSpan2}>&#9662;</span>
    </button>
  );
};

export default AddAllButton;
