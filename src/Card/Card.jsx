import React from "react";
import Button from "../components/Button/Button";

const Card = ({ data, handleEdit, handleDelete, job_search }) => {
  const {
    company_name,
    industry,
    location,
    remote_type,
    exp_min,
    exp_max,
    sal_min,
    sal_max,
    total_employee,
  } = data;

  return (
    <div className="card-container">
      <div className="card">
        <div className="content">
          <div className="card-img">
            <img src={job_search} alt="Job Logo" />
          </div>

          <div className="card-body">
            <p style={{ display: "flex" }}>
              <div style={{ fontWeight: "bold" }}>Company name:</div>
              {company_name}
            </p>
            <p style={{ display: "flex" }}>
              <div style={{ fontWeight: "bold" }}>Industry:</div>
              {industry}
            </p>
            <p style={{ display: "flex" }}>
              <div style={{ fontWeight: "bold" }}>Location:</div>
              {location}
            </p>
            <p style={{ display: "flex" }}>
              <div style={{ fontWeight: "bold" }}>Type:</div>
              {remote_type}
            </p>
            <p style={{ display: "flex" }}>
              <div style={{ fontWeight: "bold" }}>Minimum experience:</div>
              {exp_min}
            </p>
            <p style={{ display: "flex" }}>
              <div style={{ fontWeight: "bold" }}>Maximum experience:</div>
              {exp_max}
            </p>
            <p style={{ display: "flex" }}>
              <div style={{ fontWeight: "bold" }}>Minimum salary:</div>
              {sal_min}
            </p>
            <p style={{ display: "flex" }}>
              <div style={{ fontWeight: "bold" }}>Maximum salary:</div>
              {sal_max}
            </p>
            <p style={{ display: "flex" }}>
              <div style={{ fontWeight: "bold" }}>Total employees:</div>
              {total_employee}
            </p>
            <div className="card-buttons">
              <Button
                onClick={handleDelete}
                label="Delete"
                type="button"
                style={{ backgroundColor: "darkred" }}
              />
              <Button
                onClick={handleEdit}
                label="Edit"
                type="button"
                style={{ backgroundColor: "darkgreen" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
