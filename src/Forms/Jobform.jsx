import React, { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Modal from "../components/Modal/Modal";
import Label from "../components/Label/Label";
import Form_2 from "./Form_2";

function Jobform() {
  const [inputs, setInputs] = useState({
    company_name: "",
    industry: "",
    location: "",
    remote_type: "",
  });

  const [errors, setErrors] = useState({
    company_name: "",
    industry: "",
    location: "",
    remote_type: "",
  });
  const [submitValues, setSubmitValues] = useState(null);
  // const[nextform2,setNextform2]=useState(false);
  // const[nextform,setNextform]=useState(false);
  // const [opennextform, setopenNextform] = useState({
  //   Jobform: false,
  //   Form_2: false,
  // });

  const [opennextform, setopenNextform] = useState({
    Jobform: false,
    Form_2: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setInputs((values) => ({ ...values, [name]: value }));

    // if (value.trim()) {
    //   setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    // }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(inputs, "inputs");
  //   setSubmitValues(inputs);

  //   // setNextform2(!nextform2);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, "inputs");
    setSubmitValues(inputs);
    // onNext();

    // const validationErrors = validateForm(inputs);
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    // } else {
    //   console.log(inputs);
    //   // onNext();
    // }
  };

  const openForm2 = () => {
    setopenNextform({ Jobform: false, Form_2: true });
  };

  const closeJobForm = () => {
    setopenNextform({ Jobform: false, Form_2: false });
    console.log("back");
  };

  const closemodal = () => {
    setopenNextform({ Jobform: false, Form_2: false });
    // setInputs({
    //   company_name: "",
    //   industry: "",
    //   location: "",
    //   remote_type: "",
    // });
  };

  // const validateForm = (inputs) => {
  //   const errors = {};
  //   if (!inputs.company_name.trim()) {
  //     errors.company_name = "Company name is required.";
  //   }
  //   if (!inputs.industry.trim()) {
  //     errors.industry = "Industry is required.";
  //   }
  //   if (!inputs.location.trim()) {
  //     errors.location = "Location is required.";
  //   }
  //   if (!inputs.remote_type.trim()) {
  //     errors.remote_type = "Remote type is required.";
  //   }
  //   return errors;
  // };

  return (
    <>
      <div className="input-card">
        <div className="input-heading">
          <h2> Create Job </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-content">
            <div className="form">
              <div>
                <Label id="company_name" label="Company Name" />
              </div>
              <div>
                <Input
                  type="text"
                  name="company_name"
                  placeholder="Company_name"
                  value={inputs.company_name}
                  onChange={handleChange}
                  className="input-text"
                />
                {errors.company_name && (
                  <p className="error">{errors.company_name}</p>
                )}
              </div>
            </div>

            <div className="form">
              <div>
                <Label id="industry" label="Industry" />
              </div>
              <div>
                <Input
                  type="text"
                  name="industry"
                  placeholder="Industry"
                  value={inputs.industry}
                  onChange={handleChange}
                  className="input-text"
                />
                {errors.industry && <p className="error">{errors.industry}</p>}
              </div>
            </div>

            <div className="form">
              <div>
                <Label id="location" label="Location" />
              </div>
              <div>
                <Input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={inputs.location}
                  onChange={handleChange}
                  className="input-text"
                />
                {errors.location && <p className="error">{errors.location}</p>}
              </div>
            </div>

            <div className="form">
              <div>
                <Label id="remote_type" label="Remote Type" />
              </div>
              <div>
                <Input
                  type="text"
                  name="remote_type"
                  placeholder="Remote_type"
                  value={inputs.remote_type}
                  onChange={handleChange}
                  className="input-text"
                />
                {errors.remote_type && (
                  <p className="error">{errors.remote_type}</p>
                )}
              </div>
            </div>
          </div>

          <div className="Form-buttons">
            <Button label="Back" type="button" onClick={closeJobForm} />

            <Button label="Next" type="submit" onClick={openForm2} />
          </div>
        </form>
      </div>

      {opennextform.Form_2 && (
        <Modal isOpen={opennextform.Form_2} onClose={closemodal}>
          <Form_2 inputValues={inputs} />
        </Modal>
      )}

      {/* <Modal isOpen={next} onClose={close}>
        <Form_2 />
      </Modal> */}

      {/* <div>{inputs.title}</div>
        <div>{inputs.companyName}</div>
        <div>{inputs.industry}</div>
        <div>{inputs.location}</div>
        <div>{inputs.remoteType}</div> */}
    </>
  );
}

export default Jobform;
