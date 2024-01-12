import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";


export default function OutsideHomepage() {
  const [showModal, setShowModal] = React.useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.81.52:5000/api/outsites/')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleClick = () => {
    axios.post("http://192.168.81.52:5000/api/outsites/", { user: { title: title, url: url} }).then((res) => {
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
      case 'title':
        setTitle(value);
      break;
      case 'url':
        setUrl(value);
      break;
        default:
      break;
    }
  }

  return (
    <>
    <header>
      <div className="navbar">
        <div className="dropdown">
          <button className="dropbtn">Group-Rank 
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/group/rankview">RankView</a>
            <a href="/group/rankmanage">RankManage</a>
          </div>
        </div>
        <a href="/group/calllog">Call-Log</a>
        <div className="dropdown">
          <button className="dropbtn">Sites
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/group/outsidehomepage">OutSites</a>
            <a href="/group/bidhelps">Bids Helps</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">News 
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/group/view_new">New_Alarm</a>
            <a href="/group/blog">Blog</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Report 
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/group/newsmanage">New_Manage</a>
            <a href="/group/reportview">View_All_Reports</a>
            <a href="/group/makereport">Make_Report</a>
          </div>
        </div>
        <a href="/">Home</a>
      </div>
    </header>
    <body>
    <button
        classNameName="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            <strong>Title:</strong> {item.title}, <strong>URL:</strong> {item.url}
          </li>
        ))}
      </ul>
      {showModal ? (
        <>
          <div
            classNameName="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div classNameName="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div classNameName="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div classNameName="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 classNameName="text-3xl font-semibold">
                    Add
                  </h3>
                  <button
                    classNameName="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span classNameName="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div classNameName="relative p-6 flex-auto">
                  <input type="text" name="title" onChange={onChange}/>
                </div>
                <div classNameName="relative p-6 flex-auto">
                  <input type="text" name="url" onChange={onChange}/>
                </div>
                {/*footer*/}
                <div classNameName="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    classNameName="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    classNameName="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClick}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div classNameName="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </body>
    </>
  )
}
  
