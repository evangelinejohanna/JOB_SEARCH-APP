import React, { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Form_2 from "./Form_2";
import Modal from "../components/Modal/Modal";
import Label from "../components/Label/Label";

function Jobform({ onNext, onBack }) {
  const [inputs, setInputs] = useState({
    company_name: "",
    industry: "",
    location: "",
    remote_type: "",
  });
  // const[submitValues,setSubmitValues]=useState(null);
  // const[nextform2,setNextform2]=useState(false);
  // const[nextform,setNextform]=useState(false);
  // const [opennextform, setopenNextform] = useState({
  //   Jobform: false,
  //   Form_2: false,
  // });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value, "input ");
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, "inputs");
    setSubmitValues(inputs);

    // setNextform2(!nextform2);
  };

  return (
    <>
      <h2> Create Job </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Label id="company_name" label="Enter the Company Name" />
        </div>
        <div>
          <Input
            type="text"
            name="company_name"
            placeholder="Company_name"
            value={inputs.company_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label id="industry" label="Enter the Industry" />
        </div>
        <div>
          <Input
            type="text"
            name="industry"
            placeholder="Industry"
            value={inputs.industry}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label id="location" label="Enter the Location" />
        </div>
        <div>
          <Input
            type="text"
            name="location"
            placeholder="Location"
            value={inputs.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label id="remote_type" label="Enter the Remote Type" />
        </div>
        <div>
          <Input
            type="text"
            name="remote_type"
            placeholder="Remote_type"
            value={inputs.remote_type}
            onChange={handleChange}
          />
        </div>
      </form>

      <div className="Form-buttons">
        <Button label="Back" type="button" onClick={onBack} />

        <Button label="Next" type="button" onClick={onNext} />
      </div>

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
