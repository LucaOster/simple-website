import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import backurl from "../../img/mark.png";
import "./style.scss";

const CallLog = () => {
  const [callList, setCallList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://192.168.81.52:5000/api/getAllCallLog")
      .then((res) => {
        setError(null);
        if (res.data) {
          setCallList(res.data);
        }
      })
      .catch((err) => {
        setError(err);
      })
  }, [])

  const myFunction = () => {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  };

  const insertCall = () => {
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  };
  const showcontent = (e) => {
    console.log(1233);
  };
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  let contentitem=[];

  const save = () => {
    axios.post("http://192.168.81.52:5000/api/callLog", { callLog: { title: title, content: content } }).then((res) => {
      swal({
        text: res.data.message,
        icon: "success",
        type: "success"
      })
    })
  };
  let list = callList.map(item => <li><a key={item.id} onClick={showcontent(item.title)}>{item.title}</a></li> )
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
    <body>
        <div className="row">
          <div class="left" style={{ backgroundColor: "white" }}>
            <div>
              <span class="left-top">Stacks</span>
              <button id="myBtn" class="add-button" onClick={insertCall}>Add List</button>
              <div id="myModal" class="modal">
                <div class="modal-content">
                  <div class="modal-header">
                    <span className="mark-avatar"><img className="mark" src={backurl}></img></span>
                    <span className="welcome">Welcome to Report!</span>
                    <span className="close">&times;</span>
                  </div>
                  <div class="modal-body">
                    <input type="text" name="title" id="insertTitle" onChange={onChange} />
                    <br />
                    <input type="text" name="content" id="insertContent" onChange={onChange} />
                    <br />
                    <button id="saveBtn" onClick={save}>Save</button>
                  </div>
                  <div class="modal-footer">
                    <h3>Modal Footer</h3>
                  </div>
                </div>
              </div>
            </div>
            <input type="text" id="mySearch" onKeyUp={myFunction} placeholder="Search List.." title="Type in a category" />
            <div className="left-list">
              <div style={{ color: 'red' }}>
                {error && error.message}
              </div>
              {callList.length > 0 &&
                <div>
                  <ul id="myMenu">
                    {list}
                  </ul>
                </div>}
            </div>
          </div>      
          <div class="right" style={{ backgroundColor: "white" }}>
            <h2>Page Content</h2>
            {
              callList.map(item =>
                {
                  contentitem.push(item.content);
                }
                )
            }
            {
              console.log(123)
            }
          </div>
        </div>
      </body>
    </>
  )
}
  
export default CallLog;