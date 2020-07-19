import React, {useState} from 'react';
import axios from 'axios';



const Jobupdate = ({jobsToRender, id, modify, setModify}) => {


    const [day, setDay] = useState(jobsToRender.pvm)
    const [info, setInfo] = useState(jobsToRender.lisätietoja)

    const handlePvm = (e) => {
        setDay(e.target.value)
    }

    const handleInfo = (e) => {
        setInfo(e.target.value)
    }


    const handleSubmit = (e) => {
        const changed = {pvm: day, lisätietoja: info}
        axios.put(`/api/jobs/${id}`, changed)
        .then(notes => console.log('updated'))
        e.preventDefault();
        setModify(false)
    }
     
    
    return (
        <div>
            { modify ?
            <form onSubmit={handleSubmit}>
                <label>Pvm: 
                <input type="text" placeholder={jobsToRender.pvm} onChange={handlePvm}></input>
                </label>
                <label>Lisätietoja: 
                <input type="text" placeholder={jobsToRender.lisätietoja} onChange={handleInfo}></input>
                </label>
                <input type="submit" value="Tallenna"></input>
            </form>
                :null}
        </div>
    )
}

export default Jobupdate