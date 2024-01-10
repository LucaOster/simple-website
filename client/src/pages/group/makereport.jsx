import React, { useState } from 'react';
import { Button, Input, Row, Col, UncontrolledTooltip, ButtonDropdown, DropdownToggle, DropdownMenu, Label, Form } from "reactstrap";
import axios from 'axios';
import swal from 'sweetalert';
import "./style.scss";

var last_typing = 0;
export default function MakeReport(props) {
  const [report, setReport] = useState("");
  const [opinion, setOpinion] = useState("");
  const [username, setUsername] = useState("");

  //function for text input value change
  const handleReportChange = e => {
    setReport(e.target.value)
  }

  const handleOpinionChange = e => {
    setOpinion(e.target.value)
  }

  const handleClick = () => {
      axios.post("http://localhost:5000/api/report/", { reports: { name: localStorage.username, report: report, opinion: opinion } }).then((res) => {
        console.log(report);
        swal({
          text: res.data.message,
          icon: "success",
          type: "success"
        })

      })
  }

  const onChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      switch (name) {
        case 'name':
          setUsername(value);
        break;
        case 'report':
          setReport(value);
        break;
        case 'opinion':
          setOpinion(value);
        break;
          default:
        break;
      }
  }
   
    return (
        <>
        <React.Fragment>
          <body>
            <div>
                <div>
                    <h1>Hi, {localStorage.username}!</h1>
                </div>
                <div>
                    <Input type="text" value={report} onChange={handleReportChange} placeholder="Enter Report..." />
                </div>
                <div>
                    <Input type="text" value={opinion} onChange={handleOpinionChange} placeholder="Enter Opinion..." />
                </div>
                <div>
                    <Button type="submit" color="primary" onClick={handleClick}>
                        Submit
                    </Button>
                </div>
            </div>
        </body>
    </React.Fragment>
      </>
      )
}
  