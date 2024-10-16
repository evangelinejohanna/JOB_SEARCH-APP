import React, { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Form_2 from "./Form_2";
import Modal from "../components/Modal/Modal";

function Jobform() {
  const [inputs, setInputs] = useState({
    company_name: "",
    industry: "",
    location: "",
    remote_type: "",
  });
  // const[submitValues,setSubmitValues]=useState(null);
  // const[nextform2,setNextform2]=useState(false);
  // const[nextform,setNextform]=useState(false);
  const [opennextform, setopenNextform] = useState({
    Jobform: false,
    Form_2: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value, "input ");
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // const handleSubmit = (e) =>{
  //     e.preventDefault();
  //     console.log(inputs,"inputs");

  //     setSubmitValues(inputs);

  //     setNextform2(!nextform2);
  // };
  //     const closeModal_2 = (e) =>{
  //       setNextform2(false);
  //       // setInputs({ title:"", companyName: "", industry: "", location: "", remoteType:"" });
  //   }
  // const handleClose = () =>{
  //     setNextform(false);
  //     // console.log("s");
  // }

  const next = () => {
    setopenNextform({ Jobform: false, Form_2: true });
  };

  const close = () => {
    setopenNextform({ Jobform: false, Form_2: false });
    console.log("back");
  };

  return (
    <>
      <h2> Create Job </h2>

      <Input
        type="text"
        name="company_name"
        placeholder="companyName"
        value={inputs.company_name}
        onChange={handleChange}
      />

      <Input
        type="text"
        name="industry"
        placeholder="industry"
        value={inputs.industry}
        onChange={handleChange}
      />

      <Input
        type="text"
        name="location"
        placeholder="location"
        value={inputs.location}
        onChange={handleChange}
      />

      <Input
        type="text"
        name="remote_type"
        placeholder="remoteType"
        value={inputs.remote_type}
        onChange={handleChange}
      />

      <div className="Form-buttons">
        <Button label="Back" type="button" onClick={close} />

        <Button label="Next" type="button" onClick={next} />
      </div>

      <Modal>
        <Form_2 />
      </Modal>

      {/* <div>{inputs.title}</div>
        <div>{inputs.companyName}</div>
        <div>{inputs.industry}</div>
        <div>{inputs.location}</div>
        <div>{inputs.remoteType}</div> */}
    </>
  );
}

export default Jobform;
