import React from "react";

const Card = ({ data, image }) => {
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

  // console.log(data, "data");
  return (
    <div className="card">
      <div className="content">
        <div className="card-img">
          <img src={image} alt="Company Logo" />
        </div>
        <div className="card-body">
          <div>
            <p>Company name:{company_name}</p>
            <p>Industry:{industry}</p>
            <p>Location:{location}</p>
            <p>Type:{remote_type}</p>
          </div>
          <div>
            <p>Minimum experience:{exp_min}</p>
            <p>Maximum experience:{exp_max}</p>
            <p>Minimum salary:{sal_min}</p>
            <p>Maximum salary:{sal_max}</p>
            <p>Total employees:{total_employee}</p>
          </div>
          <div className="card-btn">
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
