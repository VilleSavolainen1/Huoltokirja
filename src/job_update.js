import React, { useState } from "react";
import {Button} from 'react-bootstrap';
import axios from "axios";
import './style/app.css';

const Jobupdate = ({
  jobsToRender,
  id,
  modify,
  setModify,
  setJobIsUpdated,
}) => {
  const getDate = () => {
    let day = JSON.stringify(new Date()).slice(1, 11).split("-").reverse();
    return `${day[0]}.${day[1]}.${day[2]}`;
  };

  const [day, setDay] = useState(getDate());
  const [info, setInfo] = useState(jobsToRender.lisätietoja);

  const handlePvm = (e) => {
    console.log(e.target.value);
    setDay(e.target.value);
  };

  const handleInfo = (e) => {
    setInfo(e.target.value);
  };

  const handleSubmit = (e) => {
    const changed = { pvm: day, lisätietoja: info };
    axios.put(`/api/jobs/${id}`, changed);
    e.preventDefault();
    setModify(false);
    setJobIsUpdated(true);
  };

  return (
    <div>
      {modify ? (
        <form onSubmit={handleSubmit}>
          <div id="updateform">
            <input
              type="text"
              placeholder={getDate()}
              onChange={handlePvm}
            ></input>
            <input
              type="text"
              placeholder="Lisätietoja"
              onChange={handleInfo}
            ></input>
          <Button id="update" type="submit">Tallenna</Button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default Jobupdate;
