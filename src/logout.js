import React from "react";
import { Button } from "react-bootstrap";
import exitbutton from "./images/exit.png";
import './style/app.css';

const Logout = ({ user, setUser }) => {
  const exit = () => {
    window.localStorage.clear();
    setUser(null);
  };
  
  return (
    <div className="container">
      <Button id="exit" variant="link" onClick={exit}>
        <img src={exitbutton} style={imageStyle} alt="img"></img>
      </Button>
    </div>
  );
};

const imageStyle = {
  width: "20px",
  height: "25px",
};

export default Logout;
