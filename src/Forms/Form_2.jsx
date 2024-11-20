import React, { useState, useEffect } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Label from "../components/Label/Label";

function Form_2({ inputValues, closeForm2, openForm1, closemodal, onAddCard }) {
  // console.log(inputValues, "inputvalue");
  const [data, setData] = useState([]);
  // const [count, setCount] = useState(0);

  const [inputs2, setInputs2] = useState({
    exp_max: "",
    exp_min: "",
    sal_min: "",
    sal_max: "",
    total_employee: "",
  });

  const [errors2, setErrors2] = useState({
    company_name: "",
    industry: "",
    location: "",
    remote_type: "",
  });

  const openJobForm = () => {
    // console.log("Button clicked!");
    openForm1();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(value);
    setInputs2((values) => ({ ...values, [name]: value }));
    setErrors2((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const validate_2 = () => {
    const validationErrors_2 = {};
    if (!inputs2.exp_min.trim()) {
      validationErrors_2.exp_min = "*Minimum experience is required.";
    }
    if (!inputs2.exp_max.trim()) {
      validationErrors_2.exp_max = "*Maximum experience is required.";
    }
    if (!inputs2.sal_min.trim()) {
      validationErrors_2.sal_min = "*Minimum salary is required.";
    }
    if (!inputs2.sal_max.trim()) {
      validationErrors_2.sal_max = "*Maximum salary is required.";
    }
    if (!inputs2.total_employee.trim()) {
      validationErrors_2.total_employee = "*Total employees is required.";
    }

    return validationErrors_2;
  };

  // useEffect(() => {
  //   if (count > 0) {
  //     // Call a function to update cards when count changes (only after initial render)
  //     updateCards();
  //   }
  // }, [count, updateCards]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors_2 = validate_2();
    setErrors2(validationErrors_2);

    if (Object.keys(validationErrors_2).length > 0) {
      return;
    }

    // console.log(inputValues, "inputvalues");
    // console.log(inputs2, "inputs2");

    const combinedInputs = { ...inputValues, ...inputs2 };
    console.log(combinedInputs, "combined");

    try {
      const response = await fetch(
        "https://6703a1c1ab8a8f892730f1bf.mockapi.io/api/job/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(combinedInputs),
        }
      );
      const result = await response.json();
      console.log("Submitted data:", result);
      onAddCard(result);
      closeForm2();
      closemodal();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

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
          {errors2.exp_min && <span className="error">{errors2.exp_min}</span>}
        </div>
        <br></br>
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
          {errors2.exp_max && <span className="error">{errors2.exp_max}</span>}
        </div>
        <br></br>
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
          {errors2.sal_min && <span className="error">{errors2.sal_min}</span>}
        </div>
        <br></br>
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
          {errors2.sal_max && <span className="error">{errors2.sal_max}</span>}
        </div>
        <br></br>
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
          {errors2.total_employee && (
            <span className="error">{errors2.total_employee}</span>
          )}
        </div>
      </form>
      <br></br>
      <div className="Form-buttons">
        <Button
          label="Previous"
          type="button"
          onClick={openJobForm}
          // style={{ backgroundColor: "darkred" }}
        />

        <Button
          label="Submit"
          type="submit"
          onClick={handleSubmit}
          // style={{ backgroundColor: "darkgreen" }}
        />
      </div>
    </>
  );
}

export default Form_2;
