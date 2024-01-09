import React, { useState } from 'react';
import { Button, Input, Row, Col, UncontrolledTooltip, ButtonDropdown, DropdownToggle, DropdownMenu, Label, Form } from "reactstrap";
import axios from 'axios';
import swal from 'sweetalert';
import "./style.scss";

var last_typing = 0;
export default function MakeReport(props) {
  const [report, setReport] = useState("");
  const [time, setTime] = useState("");
  const [username, setUsername] = useState("");

  //function for text input value change
  const handleChange = e => {
    setReport(e.target.value)
  //   if (props.onTyping) {
  //     let time_now = Date.now();
  //     if (time_now >= last_typing + config.TYPING_UPDATE_INTERVAL) {
  //       last_typing = time_now;
  //       props.onTyping();
  //     }
  //   }
    // alert(Date());
  //   e.target.value = null;
  }

  const handleClick = () => {
      axios.post("http://192.168.81.52:5000/report/", { reports: { name: localStorage.username, report: report } }).then((res) => {
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
          default:
        break;
      }
  }
   
    return (
        <>
        <React.Fragment>
        <header>
          <div class="navbar">
            <div class="dropdown">
                <button class="dropbtn">Group-Rank 
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="/group/rankview">RankView</a>
                  <a href="/group/rankmanage">RankManage</a>
                </div>
              </div>
              <a href="/group/calllog">Call-Log</a>
            
            <div class="dropdown">
              <button class="dropbtn">Sites
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="/group/outsidehomepage">OutSites</a>
                <a href="/group/bidhelps">Bids Helps</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">News 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="/group/view_new">New_Alarm</a>
                <a href="/group/blog">Blog</a>
              </div>
            </div>
           <div class="dropdown">
              <button class="dropbtn">Report 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="/group/newsmanage">New_Manage</a>
                <a href="/group/reportview">View_All_Reports</a>
                <a href="/group/makereport">Make_Report</a>
              </div>
            </div>
            <a href="/">Home</a>
            
            
            
            
          </div>
        </header>
        <body>
        <div>
            <div>
                Hi, {localStorage.username}!
            </div>
            <div>
                <Input type="text" value={report} onChange={handleChange} placeholder="Enter Report..." />
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
  