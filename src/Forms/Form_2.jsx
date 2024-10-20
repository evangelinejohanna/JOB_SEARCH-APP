import React, { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Label from "../components/Label/Label";
import Modal from "../components/Modal/Modal";
import Jobform from "./Jobform";

function Form_2({ inputValues }) {
  console.log(inputValues, "inputvalue");

  const [inputs2, setInputs2] = useState({
    exp_max: "",
    exp_min: "",
    sal_min: "",
    sal_max: "",
    total_employee: "",
  });

  const [posts, setPosts] = useState([]);

  const [opennextform, setopenNextform] = useState({
    Jobform: false,
    Form_2: false,
  });

  const openJobForm = () => {
    console.log("Button clicked!");
    setopenNextform({ Jobform: true, Form_2: false });
  };

  const closemodal = (e) => {
    setopenNextform({ Jobform: false, Form_2: false });
    // setInputs({
    //   company_name: "",
    //   industry: "",
    //   location: "",
    //   remote_type: "",
    // });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setInputs2((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues, "inputvalues");
    console.log(inputs2, "inputs2");
    // setSubmitValues(inputs2);
    const combinedInputs = { inputValues, inputs2 };
    console.log(combinedInputs, "combined");
    // fetch('https://6703a1c1ab8a8f892730f1bf.mockapi.io/api/job/users', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     company_name: company_name,
    //     industry: industry,
    //     location: location,
    //     remote_type: remote_type,
    //     exp_min: exp_min,
    //     exp_max: exp_max,
    //     sal_min: sal_min,
    //     sal_max: sal_max,
    //     total_employee: total_employee

    //   })
    // }
  };

  // const previous = () => {
  //   setNextform(true);
  //   setopenNextform({ Jobform: true, Form_2: false });
  //   setInputs({
  //     title: "",
  //     companyName: "",
  //     industry: "",
  //     location: "",
  //     remoteType: "",
  //   });
  // };

  // const close = () => {
  //     setopenNextform({ Jobform: false, Form_2: false });
  // };

  // const closemodal = (e) =>{
  //     // setNextform(false);
  //     // setInputs({ title:"", companyName: "", industry: "", location: "", remoteType:"" });
  // }

  return (
    <>
      <form>
        <div>
          <Label id="exp_min" label="Minimum Experience (in yrs)" />
        </div>
        <div>
          <Input
            type="number"
            name="exp_min"
            placeholder="Min_experience"
            value={inputs2.exp_min}
            onChange={handleChange}
            className="input-text"
          />
        </div>

        <div>
          <Label id="exp_max" label="Maximum Experience (in yrs)" />
        </div>
        <div>
          <Input
            type="number"
            name="exp_max"
            placeholder="Max_experience"
            value={inputs2.exp_max}
            onChange={handleChange}
            className="input-text"
          />
        </div>

        <div>
          <Label id="sal_min" label="Minimum Salary (in LPA)" />
        </div>
        <div>
          <Input
            type="number"
            name="sal_min"
            placeholder="Min_salary"
            value={inputs2.sal_min}
            onChange={handleChange}
            className="input-text"
          />
        </div>

        <div>
          <Label id="sal_max" label="Maximum Salary (in LPA)" />
        </div>
        <div>
          <Input
            type="number"
            name="sal_max"
            placeholder="Max_salary"
            value={inputs2.sal_max}
            onChange={handleChange}
            className="input-text"
          />
        </div>

        <div>
          <Label id="total_employee" label="Total employees" />
        </div>
        <div>
          <Input
            type="number"
            name="total_employee"
            placeholder="Total_employees"
            value={inputs2.total_employee}
            onChange={handleChange}
            className="input-text"
          />
        </div>
      </form>

      <div className="Form-buttons">
        <Button label="Previous" type="button" onClick={openJobForm} />

        <Button label="Submit" type="submit" onClick={handleSubmit} />
      </div>

      {opennextform.Jobform && (
        <Modal isOpen={opennextform.Jobform} onClose={closemodal}>
          <Jobform />
        </Modal>
      )}
    </>
  );
}

export default Form_2;
