import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [showData, setShowData] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const { data } = response
      setJobs(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <button onClick={() => setShowData("title")}> Title</button>
      <button onClick={() => setShowData("dates")}> Dates</button>
      <table border="1">
        <tr>
          <th>Title</th>
          <th>Dates</th>
        </tr>
        {jobs.map((job) => (
          <tr>
            <td>{showData == "title" ? job.title : ""} </td>
            <td>{showData == "dates" ? job.dates : ""} </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default App;
