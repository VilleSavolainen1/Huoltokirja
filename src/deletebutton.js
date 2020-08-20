import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import trash from "./images/trash.png";

const Deletebutton = ({ target, setNotesUpdated }) => {
  const handleClick = () => {
    axios
      .delete(`/api/notes/${target}`)
      setNotesUpdated(true)
  };

  return (
    <Button variant="outline-light" onClick={handleClick}>
      <img src={trash} style={imageStyle} alt="img" />
    </Button>
  );
};

const imageStyle = {
  width: "18px",
  height: "15px",
};

export default Deletebutton;
