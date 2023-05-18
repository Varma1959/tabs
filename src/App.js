import React, { useState, useEffect } from "react";
import axios from "axios";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(2);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://course-api.com/react-tabs-project"
        );
        const { data } = response;
        setJobs(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section>
    <h2>experience</h2>
       
      <div>
        {/* btn container */}
        <div>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}>
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button>more info</button>
    </section>
  );
}

export default App;
