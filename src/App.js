import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Main from './main'
import Weather from './weather';
import Workbench from './worktable';
import Notes from './notes';
import Info from './info';
import arrow from './images/arrow.png';
import {Button, Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import loginService from './services/login';
import Logout from './logout';
import './app.css'


const App = () => {

  let jobsToRender;
  let notesToRender;

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [notes, setNotes] = useState([])
  const [user, setUser] = useState(null)
  const [temp, setTemp] = useState('');
  const [wind, setWind] = useState('');
  const [desc, setDesc] = useState('');
  const [jobs, setJobs] = useState();
  const [modify, setModify] = useState(false);
  const [index, setIndex] = useState(null)
  const [error, setError] = useState('')
  const [addnote, setAddnote] = useState(false)


  useEffect(() => {
    axios
    .get('/api/jobs')
    .then(res => {
      setJobs(res.data.map(job => job))
    })
  }, [jobs])

  useEffect(() => {
    axios
    .get('/api/notes')
    .then(res => {
      setNotes(res.data)
    })
  }, [notes])

  if(notes){
    notesToRender = notes
  }else{
    jobsToRender = 'Loading...'
  }

  if(jobs){
    jobsToRender = jobs
  }else {
    jobsToRender = "Loading..."
  }

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedUser')
    if(loggedUser){
      const user = JSON.parse(loggedUser)
      setUser(user)
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const user = await loginService.login({username, password})
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      setUser(user)
      setUsername('')
      setPassword('')
    }
    catch (exception){
      setUsername('')
      setPassword('')
      setError("Väärä käyttäjänimi tai salasana")
    }
  }
 
  const loginForm = () => (
    <center>
    <form onSubmit={handleLogin} style={formStyle}>
      <div className="container">
          <input
          type="text"
          value={username}
          name="Username"
          placeholder="Käyttäjänimi"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div className="container">
          <input
          type="password"
          value={password}
          name="Password"
          placeholder="Salasana"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <Button variant="outline-light" type="submit"><img src={arrow} style={imageStyle} alt="img"/></Button>
    </form>
    <p style={errorStyle}>{error}</p>
    </center>      
  )


  return (
    <div className="container">
      {user === null ?
      loginForm() :
      <Router>
        <div>
        <Navbar bg="dark" collapseOnSelect expand="lg" fixed="top">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Weather temp={temp} setTemp={setTemp} wind={wind} setWind={setWind} desc={desc} setDesc={setDesc}/>
          <NavLink exact activeClassName="active" style={linkStyle} to="/">Etusivu</NavLink>
          <NavLink activeClassName="active" style={linkStyle} to="/info">Kohdetiedot</NavLink>
          <NavLink activeClassName="active" style={linkStyle} to="/worktable">Huoltokirja</NavLink>
          <NavLink activeClassName="active" style={linkStyle} to="/notes">Muistiinpanot</NavLink>
            <Navbar className="ml-auto">
            <Logout user={user} setUser={setUser}/>
          </Navbar>
          </Navbar.Collapse>
          </Navbar>
        </div>
        <Switch>
          <Route path="/worktable">
            <Workbench jobsToRender={jobsToRender} modify={modify} setModify={setModify} index={index} setIndex={setIndex}/>
          </Route>
          <Route path="/notes">
            <Notes notesToRender={notesToRender} notes={notes} setNotes={setNotes} addnote={addnote} setAddnote={setAddnote}/>
          </Route>
          <Route path="/info">
            <Info/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </Router>
      }
    </div>
  );
}

const linkStyle = {
  textDecoration: 'none',
  fontSize: 24,
  padding: 12,
  fontFamily: 'Verdana',
  letterSpacing: 3
}

const imageStyle = {
  width: '28px',
  height: '25px'
}

const errorStyle = {
  color: 'red'
}

const formStyle = {
  marginTop: 180
}

export default App;
