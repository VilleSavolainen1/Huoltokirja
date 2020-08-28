import React from "react";
import { Button } from "react-bootstrap";
import pencil from "./images/pencil.png";
import './style/app.css';

const Update = ({ id, modify, setModify, setIndex }) => {
  const setVisibility = () => {
    !modify ? setModify(true) : setModify(false);
    setIndex(id);
  };

  return (
    <div>
      <Button id="pencil" variant="link" onClick={setVisibility}>
        <img src={pencil} style={imageStyle} alt="img" />
      </Button>
    </div>
  );
};

const imageStyle = {
  width: "18px",
  height: "15px",
};
export default Update;
