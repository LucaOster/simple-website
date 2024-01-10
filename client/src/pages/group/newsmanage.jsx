import axios from 'axios'
import swal from "sweetalert";
import React, { useState, useEffect } from "react";

export default function NewsManage() {

    const [content, setContent] = useState('');

    const handleClick = () => {

        axios.post("http://localhost:5000/api/save_news/", { datas: { news_content: content, user_id: '1', type:'1'} }).then((res) => {
          if (res.data.message === "successfully") {
            
            swal({
              text: res.data.message,
              icon: "success",
              type: "success"
            }).then(() => {
              //window.location.href="/";
            });
            //localStorage.setItem("token", res.data.token);
          }
    
      
        });
      }

      const handleChange = (e) =>{

        const content  = e.target.value
        setContent(content)
      }
   
    return (
        <>
            <div> 
                This is the news manage page!!!
                <textarea name='textcontent' onChange={handleChange}/>
                <button type="button" className="btn" onClick={handleClick}>click me!</button>
            </div>
        </>
      )
}
  