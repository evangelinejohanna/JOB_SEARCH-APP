import { useEffect, useState } from "react";
import React from "react";
import Card from "./Card/Card";
// import image from "./assets/image.jpg";
import job_image from "./assets/job_image.jpg";
import Jobform from "./Forms/Jobform";
import Form_2 from "./Forms/Form_2";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const [opennextform, setopenNextform] = useState({
  //   Jobform: false,
  //   Form_2: false,
  // });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://6703a1c1ab8a8f892730f1bf.mockapi.io/api/job/users"
      );
      console.log(response, "response");

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setData(data);
      console.log("resp data", data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="wrapper">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          data.map((item) => (
            <Card key={item.id} data={item} job_image={job_image} />
          ))
        )}
      </div>
      <div>
        {/* <Jobform /> */}
        {/* <Form_2 /> */}
      </div>
    </>
  );
};

export default DataFetcher;
