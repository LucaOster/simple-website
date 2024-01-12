import React from "react"
import { format } from "date-fns";
import { useState, useEffect } from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListSubheader
} from '@mui/material';
import 'tailwindcss/tailwind.css';
import axios from "axios";
import swal from "sweetalert";

export default function BidHelp() {
  const checkboxCount = 23;
  const [showModal, setShowModal] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [bid, setBid] = React.useState('');
  const [data, setData] = React.useState([]);
  const [checkboxes, setCheckboxes] = useState(() => {
    const initialState = {};
    for (let i = 1; i <= checkboxCount; i++) {
      initialState[`checkbox${i}`] = false;
    }
    return initialState;
  });
  
  useEffect(() => {
    let currentDate = format(Date(), 'yyyy-M-d');

    const header = '$date=' + currentDate + '$type=' + '1';
    const url = 'http://192.168.81.52:5000/api/bidhelp' + header ;
    axios.get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching bids:", error);
      });
  }, []);

  const handleClick = () => {
    axios.post("http://192.168.81.52:5000/api/addBid", { user: { title: title, bid: bid} }).then((res) => {
      swal({
        text: res.data.message,
        icon: "success",
        type: "success"
      })
    })
    console.log("Bid");
  }

  const handleCloseModal = () => {
    setShowModal(false);
    handleClick();
  };

  const stackData = [
    {name: 'HTML'}, {name: 'CSS'}, {name: 'W3.CSS'}, {name: 'Tailwind CSS'}, {name: 'Bootstrap'}, {name: 'JavaScript'}, {name: 'TypeScript'},
    {name: 'jQuery'}, {name: 'AngularJS'}, {name: 'Vue.js'}, {name: 'React.js'}, {name: 'Redux'}, {name: 'C'}, {name: 'C++'},
    {name: 'C#'}, {name: 'Java'}, {name: 'PHP'}, {name: 'Laravel'}, {name: 'CodeIgniter'}, {name: '.NET'}, {name: 'ASP.NET'},
    {name: 'Python'}, {name: 'Django'}, {name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}, {name: 'SQL'}, {name: 'MySQL'},
  ];

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'title':
        setTitle(value);
      break;
      case 'bid':
        setBid(value);
      break;
        default:
      break;
    }
  }

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };
  return (
    <>
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
    <input
        type="search"
        class="relative ml-10 block w-150 ma-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        // value={searchData}
        // onChange={handleSearch}
        placeholder="Search..." />
      <button
        className="flex p-3 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Your Bid
      </button>
      <div className="flex p-4">
        <List
          sx={{
            width: '100%',
            maxWidth: 300,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 450,
            border: 1,
            marginLeft: 3
          }}
        >
          {stackData.map((stackItem) => (
            <div key={stackItem.name}>
              <Checkbox
                checked={checkboxes[stackItem.name]}
                onChange={() => handleCheckboxChange(stackItem.name)}
              />
              {stackItem.name}
            </div>
          ))}
        </List>
        <div>
          <TableContainer component={Paper} sx={{
            marginLeft: 10,
            minHeight: 450,
            maxHeight: 450,
            maxWidth: 1050,
          }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Bid</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((bids) => (
                  <TableRow>
                    <TableCell>{data.title}</TableCell>
                    <TableCell>{data.bid}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <textarea onChange={onChange} name="title" rows="1" cols="30" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title"></textarea><br></br>
                  <textarea onChange={onChange} name="bid" rows="10" cols="100" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Your Bids..."></textarea>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCloseModal}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
  
