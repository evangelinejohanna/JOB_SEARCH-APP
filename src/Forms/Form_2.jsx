import React, { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Label from "../components/Label/Label";

function Form_2({ onprevious, inputValues }) {
  const [inputs2, setInputs2] = useState({
    exp_max: "",
    exp_min: "",
    sal_min: "",
    sal_max: "",
    total_employee: "",
  });
  // const [nextform, setNextform] = useState(false);
  // const [opennextform, setopenNextform] = useState({
  //   Jobform: false,
  //   Form_2: false,
  // });
  // const[inputs,setInputs]=useState({exp_max:" ", exp_max: "", sal_min: "", sal_max: ""});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setInputs2((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props);
    console.log({ inputs2 });
    console.log({ inputValues });

    console.log(inputs2, "inputs2");
    setSubmitValues(inputs2);

    // setNextform2(!nextform2);
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
        <Button label="Previous" type="button" onClick={onprevious} />

        <Button label="Submit" type="submit" onSubmit={handleSubmit} />
      </div>

      <div>
        <p>{inputValues?.company_name}</p>
        <p>{inputValues?.industry}</p>
        <p>{inputValues?.location}</p>
        <p>{inputValues?.remote_type}</p>
        <p>{inputs2.exp_min}</p>
        <p>{inputs2.exp_max}</p>
        <p>{inputs2.sal_min}</p>
        <p>{inputs2.sal_max}</p>
        <p>{inputs2.total_employee}</p>
        console.log({inputs2.total_employee}); console.log(
        {inputValues?.location});
      </div>
      {/* <Modal>
        <Jobform />
      </Modal> */}
    </>
  );
}

export default Form_2;
