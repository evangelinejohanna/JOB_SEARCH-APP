import React, { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Jobform from "../Forms/Jobform";
import Modal from "../components/Modal/Modal";

function Form_2() {
  const [inputs2, setInputs2] = useState({
    exp_max: "",
    exp_min: "",
    sal_min: "",
    sal_max: "",
    total_employee: "",
  });
  const [nextform, setNextform] = useState(false);
  const [opennextform, setopenNextform] = useState({
    Jobform: false,
    Form_2: false,
  });
  // const[inputs,setInputs]=useState({exp_max:" ", exp_max: "", sal_min: "", sal_max: ""});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value, "input ");
    setInputs2((values) => ({ ...values, [name]: value }));
  };

  const previous = () => {
    // setNextform(true);
    setopenNextform({ Jobform: true, Form_2: false });
    // setInputs({ title:"", companyName:"", industry: "", location: "", remoteType:"" });
  };

  // const close = () => {
  //     setopenNextform({ Jobform: false, Form_2: false });
  // };

  // const closemodal = (e) =>{
  //     // setNextform(false);
  //     // setInputs({ title:"", companyName: "", industry: "", location: "", remoteType:"" });
  // }

  return (
    <>
      <Input
        type="number"
        name="minexperience"
        placeholder="minexperience"
        value={inputs2.exp_min}
        onChange={handleChange}
      />

      <Input
        type="number"
        name="maxexperience"
        placeholder="maxexperience"
        value={inputs2.exp_max}
        onChange={handleChange}
      />

      <Input
        type="number"
        name="minsalary"
        placeholder="minsalary"
        value={inputs2.sal_min}
        onChange={handleChange}
      />

      <Input
        type="number"
        name="maxsalary"
        placeholder="maxsalary"
        value={inputs2.sal_max}
        onChange={handleChange}
      />

      <Input
        type="number"
        name="total_employee"
        placeholder="total_employees"
        value={inputs2.total_employee}
        onChange={handleChange}
      />

      <div className="Form-buttons">
        <Button label="Previous" type="button" onClick={previous} />
        {/* <Button label="Close" type="button" onClick={close} /> */}
        <Button label="Submit" type="button" />
      </div>
      <Modal>
        <Jobform />
      </Modal>
    </>
  );
}

export default Form_2;
