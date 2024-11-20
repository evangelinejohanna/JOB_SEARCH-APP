import React, { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Label from "../components/Label/Label";

function Jobform({
  closemodal,
  closeForm1,
  openForm2,
  setForm1Inputs,
  form1Inputs,
}) {
  const [inputs, setInputs] = useState({
    company_name: form1Inputs?.company_name || "",
    industry: form1Inputs?.industry || "",
    location: form1Inputs?.location || "",
    remote_type: form1Inputs?.remote_type || "",
  });

  const [errors, setErrors] = useState({
    company_name: "",
    industry: "",
    location: "",
    remote_type: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(value);
    setInputs((values) => ({ ...values, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validate = () => {
    const validationErrors = {};
    if (!inputs.company_name.trim()) {
      validationErrors.company_name = "*Company name is required.";
    }
    if (!inputs.industry.trim()) {
      validationErrors.industry = "*Industry is required.";
    }
    if (!inputs.location.trim()) {
      validationErrors.location = "*Location is required.";
    }
    if (!inputs.remote_type.trim()) {
      validationErrors.remote_type = "*Remote type is required.";
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // console.log(inputs, "inputs");
      setForm1Inputs(inputs);
      closeForm1();
      openForm2();
      // console.log("Next button clicked");
    } else {
      console.log("Validation errors", validationErrors);
    }
  };

  return (
    <>
      <div className="input-card">
        <div className="input-heading">
          <h2> Create Job </h2>
        </div>
        <form>
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
                  <span className="error">{errors.company_name}</span>
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
                {errors.industry && (
                  <span className="error">{errors.industry}</span>
                )}
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
                {errors.location && (
                  <span className="error">{errors.location}</span>
                )}
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
                  <span className="error">{errors.remote_type}</span>
                )}
              </div>
            </div>
          </div>

          <div className="Form-buttons">
            <Button
              label="Back"
              type="button"
              onClick={() => {
                closemodal();
                closeForm1();
                document.body.style.overflow = "scroll";
              }}
              // style={{ backgroundColor: "darkred" }}
            />

            <Button
              label="Next"
              type="button"
              onClick={handleSubmit}
              // style={{ backgroundColor: "darkgreen" }}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Jobform;
