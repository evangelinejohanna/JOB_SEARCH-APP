import React from "react";

const Card = ({ data, job_image }) => {
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
  // const [inputs, setInputs] = useState({
  //   company_name: "",
  //   industry: "",
  //   location: "",
  //   remote_type: "",
  // });
  // const [inputs2, setInputs2] = useState({
  //   exp_max: "",
  //   exp_min: "",
  //   sal_min: "",
  //   sal_max: "",
  //   total_employee: "",
  // });

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setInputs((values) => ({ ...values, [name]: value }));

  //   if (isEditing) {
  //     const updatedUsers = [...users];
  //     updatedUsers[editIndex] = inputs;
  //     setUsers(updatedUsers);
  //     setIsEditing(false);
  //   } else {
  //     setUsers((prevUsers) => [...prevUsers, inputs]);
  //   }

  //   setEditIndex(null);
  //   nameRef.current.focus();
  // };

  // const handleEdit = (index) => {
  //   const userEdit = users[index];
  //   setInputs(userEdit);
  //   setEditIndex(index);
  //   setIsEditing(true);
  // };

  // console.log(data, "data");
  return (
    <div className="card">
      <div className="content">
        <div className="card-img">
          <img src={job_image} alt="Job Logo" />
        </div>
        <div className="card-body">
          <div>
            {/* <input
              type="text"
              name="Company name:"
              value={company_name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="Industry:"
              value={industry}
              onChange={handleChange}
            />
            <input
              type="text"
              name="Location:"
              value={location}
              onChange={handleChange}
            />
            <input
              type="text"
              name="Type:"
              value={remote_type}
              onChange={handleChange}
            /> */}

            <p>Company name:{company_name}</p>
            <p>Industry:{industry}</p>
            <p>Location:{location}</p>
            <p>Type:{remote_type}</p>
          </div>
          <div>
            {/* <input
              type="number"
              name="Minimum experience:"
              value={exp_min}
              onChange={handleChange}
            />
            <input
              type="number"
              name="Maximum experience:"
              value={exp_max}
              onChange={handleChange}
            />
            <input
              type="number"
              name="Minimum salary:"
              value={sal_min}
              onChange={handleChange}
            />
            <input
              type="number"
              name="Total employees:"
              value={total_employee}
              onChange={handleChange}
            /> */}

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
