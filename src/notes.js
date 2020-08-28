import React, { useState } from "react";
import { Button } from "react-bootstrap";
import plus from "./images/plus.png";
import axios from "axios";
import Deletebutton from "./deletebutton";
import './style/note.css';

const Notes = ({ notesToRender, addnote, setAddnote, setNotesUpdated, setNoteDeleted }) => {
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
    setNotesUpdated(true)
  };

  const list = notesToRender.map((notes) => {
    return (
      <ul key={notes.id}>
        <div className="note">
          <div className="text">
          {notes.note} <Deletebutton target={notes.id} setNotesUpdated={setNotesUpdated} />
          </div>
        </div>
      </ul>
    );
  });
  return (
    <div style={noteStyle}>
      <h3>Muistiinpanot</h3>
      <br></br>
      <div>
        <Button className="plus" variant="link" onClick={showInputs}>
          <img src={plus} style={imageStyle} alt="img"></img>
        </Button>
        <br></br>
        <br></br>
        {addnote ? (
            <form onSubmit={handleSubmit}>
              <div className="savenote">
              <textarea className="noteform"
                type="text"
                placeholder="Uusi muistiinpano..."
                onChange={handleInput}
                rows="4"
                cols="30"
              ></textarea>
              <Button id="save" type="submit">Tallenna</Button>
              </div>
            </form>
        ) : null}
        <br></br>
        {list}
      </div>
    </div>
  );
};

const noteStyle = {
  paddingTop: 150,
  fontSize: 18,
};

const imageStyle = {
  width: "25px",
  height: "25px",
};

export default Notes;
