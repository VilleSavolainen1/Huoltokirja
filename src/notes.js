import React, { useState } from "react";
import { Button } from "react-bootstrap";
import plus from "./images/plus.png";
import axios from "axios";
import Deletebutton from "./deletebutton";

const Notes = ({ notesToRender, addnote, setAddnote }) => {
  const [note, setNote] = useState("");

  const showInputs = () => {
    addnote ? setAddnote(false) : setAddnote(true);
  };

  const handleInput = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const changed = { note: note };
    axios.post("/api/notes", changed).then((notes) => console.log("updated"));
    setAddnote(false);
  };

  const list = notesToRender.map((notes) => {
    return (
      <ul key={notes.id}>
        <p>
          {notes.note} <Deletebutton target={notes.id} />
        </p>
      </ul>
    );
  });
  return (
    <div style={noteStyle}>
      <div>
        <Button variant="outline-light" onClick={showInputs}>
          <img src={plus} style={imageStyle} alt="img"></img>
        </Button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {addnote ? (
          <center>
            <form onSubmit={handleSubmit}>
              <textarea
                type="text"
                placeholder="Uusi muistiinpano..."
                onChange={handleInput}
                rows="4"
                cols="50"
              ></textarea>
              <input type="submit" value="Tallenna"></input>
            </form>
          </center>
        ) : null}
        {list}
      </div>
    </div>
  );
};

const noteStyle = {
  paddingTop: 200,
  fontSize: 18,
};

const imageStyle = {
  width: "25px",
  height: "25px",
};

export default Notes;
