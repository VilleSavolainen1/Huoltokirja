import React, { useState, useEffect } from "react";
import axios from "axios";
import Workbench from "./worktable";
import Notes from "./notes";
import Info from "./info";
import arrow from "./images/arrow.png";
import { Button, Navbar } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import loginService from "./services/login";
import Logout from "./logout";
import "./style/app.css";

const App = () => {
  let jobsToRender;
  let notesToRender;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState();
  const [modify, setModify] = useState(false);
  const [index, setIndex] = useState(null);
  const [error, setError] = useState("");
  const [addnote, setAddnote] = useState(false);
  const [jobisupdated, setJobIsUpdated] = useState(false);
  const [notesupdated, setNotesUpdated] = useState(false);



  useEffect(() => {
    axios.get("/api/jobs").then((res) => {
      setJobs(res.data.map((job) => job));
    });
  }, [jobisupdated]);

  useEffect(() => {
    setJobIsUpdated(false)
  }, [jobs])

  useEffect(() => {
    setNotesUpdated(false)
  }, [notes])

  useEffect(() => {
    axios.get("/api/notes").then((res) => {
      setNotes(res.data);
    });
  }, [notesupdated]);


  if (notes) {
    notesToRender = notes;
  } else {
    jobsToRender = "Loading...";
  }

  if (jobs) {
    jobsToRender = jobs;
  } else {
    jobsToRender = "Loading...";
  }

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedUser");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setUser(user);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginService.login({ username, password });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setUsername("");
      setPassword("");
      setError("Väärä käyttäjänimi tai salasana");
    }
  };

  const loginForm = () => (
    <center>
      <div className="loginform">
        <div className="form-self">
      <form onSubmit={handleLogin}>
          <input className="forminput"
            type="text"
            value={username}
            name="Username"
            placeholder="Käyttäjänimi"
            onChange={({ target }) => setUsername(target.value)}
          />
          <input className="forminput"
            type="password"
            value={password}
            name="Password"
            placeholder="Salasana"
            onChange={({ target }) => setPassword(target.value)}
          /><br></br>
        <Button variant="outline-light" type="submit" className="formsubmit">
          <img src={arrow} style={imageStyle} alt="img" />
        </Button>
      </form>
      <p style={errorStyle}>{error}</p>
      </div>
      </div>
    </center>
  );

  return (
    <div className="container">
      {user === null ? (
        loginForm()
      ) : (
        <Router>
          <div>
            <Navbar collapseOnSelect expand="sm" fixed="top" className="nav">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <NavLink activeClassName="active" className="link" style={linkStyle} to="/info">
                  Kohdetiedot
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="link"
                  style={linkStyle}
                  to="/worktable"
                >
                  Huoltokirja
                </NavLink>
                <NavLink activeClassName="active" className="link" style={linkStyle} to="/notes">
                  Muistiinpanot
                </NavLink>
                </Navbar.Collapse>
                <Navbar className="ml-auto">
                  <Logout user={user} setUser={setUser} />
                </Navbar>
            </Navbar>
          </div>
          <Switch>
            <Route path="/worktable">
              <Workbench
                jobsToRender={jobsToRender}
                modify={modify}
                setModify={setModify}
                index={index}
                setIndex={setIndex}
                setJobIsUpdated={setJobIsUpdated}
              />
            </Route>
            <Route path="/notes">
              <Notes
                notesToRender={notesToRender}
                notes={notes}
                setNotes={setNotes}
                addnote={addnote}
                setAddnote={setAddnote}
                setNotesUpdated={setNotesUpdated}
              />
            </Route>
            <Route path="/">
              <Info />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
};

const linkStyle = {
  textDecoration: "none",
  fontSize: 18,
  paddingRight: 8
};

const imageStyle = {
  width: "28px",
  height: "25px",
};

const errorStyle = {
  color: "red",
};




export default App;
