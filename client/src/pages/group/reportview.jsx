import { useEffect, useState } from "react";
import axios from 'axios';

const ViewReport = () => {

  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/all")
      .then((res) => {
        setError(null);
        if (res.data) 
          setList(res.data);
      })
      .catch((err) => {
        console.log(error);
        setError(err);
      })
  }, [])

  return (
    <>
      <div>
        This is the viewreport page!!!
      </div>
      <div style={{color: 'red'}}>
        {error && error.message}
      </div>
      { list.length > 0 && 
      <div>
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </thead>
          <tbody>
            {
              list.map((item, id) => {
                return <tr key={id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div> }
    </>
  )
}

export default ViewReport;