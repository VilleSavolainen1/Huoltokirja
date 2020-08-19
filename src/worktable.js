import React from "react";
import { Table } from "react-bootstrap";
import Update from "./update_button";
import Jobupdate from "./job_update";

const Workbench = ({ jobsToRender, modify, setModify, index, setIndex }) => {
  const id = [
    "5efde504a25c8b1b20deb8e9",
    "5efde58d6a49da22e8cb6576",
    "5efde97ec8302e0a6c3880e9",
    "5efde99071fe2404a07bb4cf",
    "5efde9a14a95090084b770eb",
    "5efde9aca751fc32f888289a",
    "5efde9b9f0c5852c14c96a80",
    "5efde9c61aa15727989ac12b",
    "5efde9d29bdd2422f80d0a4d",
    "5efde9e40e01080ac469d924",
    "5efde9ef1d8dcc11380e46bd",
    "5efde9fc2f5ab50a50281259",
    "5efdea0c2e4b4307246f7ca7",
  ];

  return (
    <div style={workStyle}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Työnimike</th>
            <th>Päivämäärä</th>
            <th>Lisätietoja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nuohous</td>
            <td>{jobsToRender[0].pvm}</td>
            <td>{jobsToRender[0].lisätietoja}</td>
            <td>
              {
                <Update
                  jobsToRender={jobsToRender[0]}
                  id={id[0]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              }
              {index === id[0] ? (
                <Jobupdate
                  jobsToRender={jobsToRender}
                  id={id[0]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              ) : null}
            </td>
          </tr>
          <tr>
            <td>Rännien ja loiskekaivojen puhdistus</td>
            <td>{jobsToRender[1].pvm}</td>
            <td>{jobsToRender[1].lisätietoja}</td>
            <td>
              {
                <Update
                  jobsToRender={jobsToRender[1]}
                  id={id[1]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              }
              {index === id[1] ? (
                <Jobupdate
                  jobsToRender={jobsToRender}
                  id={id[1]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              ) : null}
            </td>
          </tr>
          <tr>
            <td>IV-suodattimien vaihto</td>
            <td>{jobsToRender[2].pvm}</td>
            <td>{jobsToRender[2].lisätietoja}</td>
            <td>
              {
                <Update
                  jobsToRender={jobsToRender[2]}
                  id={id[2]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              }
              {index === id[2] ? (
                <Jobupdate
                  jobsToRender={jobsToRender}
                  id={id[2]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              ) : null}
            </td>
          </tr>
          <tr>
            <td>IV-koneen lämmönvaihtimen kennon puhdistus</td>
            <td>{jobsToRender[3].pvm}</td>
            <td>{jobsToRender[3].lisätietoja}</td>
            <td>
              {
                <Update
                  jobsToRender={jobsToRender[3]}
                  id={id[3]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              }
              {index === id[3] ? (
                <Jobupdate
                  jobsToRender={jobsToRender}
                  id={id[3]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              ) : null}
            </td>
          </tr>
          <tr>
            <td>Kiukaan kivien vaihto</td>
            <td>{jobsToRender[4].pvm}</td>
            <td>{jobsToRender[4].lisätietoja}</td>
            <td>
              {
                <Update
                  jobsToRender={jobsToRender[4]}
                  id={id[4]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              }
              {index === id[4] ? (
                <Jobupdate
                  jobsToRender={jobsToRender}
                  id={id[4]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              ) : null}
            </td>
          </tr>
          <tr>
            <td>Ilmalämpöpumpun huolto</td>
            <td>{jobsToRender[5].pvm}</td>
            <td>{jobsToRender[5].lisätietoja}</td>
            <td>
              {
                <Update
                  jobsToRender={jobsToRender[5]}
                  id={id[5]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              }
              {index === id[5] ? (
                <Jobupdate
                  jobsToRender={jobsToRender}
                  id={id[5]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              ) : null}
            </td>
          </tr>
          <tr>
            <td>IV-kanavien nuohous</td>
            <td>{jobsToRender[6].pvm}</td>
            <td>{jobsToRender[6].lisätietoja}</td>
            <td>
              {
                <Update
                  jobsToRender={jobsToRender[6]}
                  id={id[6]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              }
              {index === id[6] ? (
                <Jobupdate
                  jobsToRender={jobsToRender}
                  id={id[6]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              ) : null}
            </td>
          </tr>
          <tr>
            <td>Ryömintätilakuivaimen tarkastus</td>
            <td>{jobsToRender[7].pvm}</td>
            <td>{jobsToRender[7].lisätietoja}</td>
            <td>
              {
                <Update
                  jobsToRender={jobsToRender[7]}
                  id={id[7]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              }
              {index === id[7] ? (
                <Jobupdate
                  jobsToRender={jobsToRender}
                  id={id[7]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              ) : null}
            </td>
          </tr>
          <tr>
            <td>Salaojakaivojen tarkastus</td>
            <td>{jobsToRender[8].pvm}</td>
            <td>{jobsToRender[8].lisätietoja}</td>
            <td>
              {
                <Update
                  jobsToRender={jobsToRender[8]}
                  id={id[8]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              }
              {index === id[8] ? (
                <Jobupdate
                  jobsToRender={jobsToRender}
                  id={id[8]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              ) : null}
            </td>
          </tr>
          <tr>
            <td>Julkisivujen huoltomaalaus</td>
            <td>{jobsToRender[9].pvm}</td>
            <td>{jobsToRender[9].lisätietoja}</td>
            <td>
              {
                <Update
                  jobsToRender={jobsToRender[9]}
                  id={id[9]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              }
              {index === id[9] ? (
                <Jobupdate
                  jobsToRender={jobsToRender}
                  id={id[9]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              ) : null}
            </td>
          </tr>
          <tr>
            <td>Ulko-ovien ja ikkunoiden tarkastus</td>
            <td>{jobsToRender[10].pvm}</td>
            <td>{jobsToRender[10].lisätietoja}</td>
            <td>
              {
                <Update
                  jobsToRender={jobsToRender[10]}
                  id={id[10]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              }
              {index === id[10] ? (
                <Jobupdate
                  jobsToRender={jobsToRender}
                  id={id[10]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              ) : null}
            </td>
          </tr>
          <tr>
            <td>Ikkunoiden pellityksen tarkastus</td>
            <td>{jobsToRender[11].pvm}</td>
            <td>{jobsToRender[11].lisätietoja}</td>
            <td>
              {
                <Update
                  jobsToRender={jobsToRender[11]}
                  id={id[11]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              }
              {index === id[11] ? (
                <Jobupdate
                  jobsToRender={jobsToRender}
                  id={id[11]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              ) : null}
            </td>
          </tr>
          <tr>
            <td>Vesikaton ja yläpohjatilan tarkastus</td>
            <td>{jobsToRender[12].pvm}</td>
            <td>{jobsToRender[12].lisätietoja}</td>
            <td>
              {
                <Update
                  jobsToRender={jobsToRender[12]}
                  id={id[12]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              }
              {index === id[12] ? (
                <Jobupdate
                  jobsToRender={jobsToRender}
                  id={id[12]}
                  modify={modify}
                  setModify={setModify}
                  index={index}
                  setIndex={setIndex}
                />
              ) : null}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const workStyle = {
  paddingTop: 60
}

export default Workbench;
