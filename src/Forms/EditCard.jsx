import React, { useState, useEffect } from "react";
import Label from "../components/Label/Label";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const EditCard = ({ data }) => {
  const [editData, setEditData] = useState(data);

  const [editOpenmodal, seteditOpenmodal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onCancel = () => {
    seteditOpenmodal(false);
    console.log(editOpenmodal);
    document.body.style.overflow = "scroll";
  };

  const handleSave = async (e) => {
    // e.preventDefault();

    try {
      const response = await fetch(
        `https://6703a1c1ab8a8f892730f1bf.mockapi.io/api/job/users/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update data.");
      }

      const result = await response.json();

      setEditData((prevData) => {
        return prevData;
      });
    } catch (error) {
      console.error("Error updating data:", error);
    }
    seteditOpenmodal(false);
    console.log(editOpenmodal);
  };

  return (
    <>
      <div className="input-card">
        <div className="input-heading">
          <h2> Edit Job </h2>
        </div>
        <form>
          <div className="input-content">
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              <div className="form">
                <div>
                  <Label id="company_name" label="Company name:" />
                </div>
                <div>
                  <Input
                    type="text"
                    name="company_name"
                    value={editData.company_name || ""}
                    onChange={handleInputChange}
                    className="input-text"
                  />
                </div>
              </div>
              <div className="form">
                <div>
                  <Label id="industry" label="Industry:" />
                </div>
                <div>
                  <Input
                    type="text"
                    name="industry"
                    value={editData.industry || ""}
                    onChange={handleInputChange}
                    className="input-text"
                  />
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
                    value={editData.location || ""}
                    onChange={handleInputChange}
                    className="input-text"
                  />
                </div>
              </div>
              <div className="form">
                <div>
                  <Label id="remote_type" label="Remote Type:" />
                </div>
                <div>
                  <Input
                    type="text"
                    name="remote_type"
                    value={editData.remote_type || ""}
                    onChange={handleInputChange}
                    className="input-text"
                  />
                </div>
              </div>
              <div className="form">
                <div>
                  <Label id="exp_min" label="Minimum Experience:" />
                </div>
                <div>
                  <Input
                    type="number"
                    name="exp_min"
                    value={editData.exp_min || ""}
                    onChange={handleInputChange}
                    className="input-text"
                  />
                </div>
              </div>
              <div className="form">
                <div>
                  <Label id="exp_max" label="Maximum Experience:" />
                </div>
                <div>
                  <Input
                    type="number"
                    name="exp_max"
                    value={editData.exp_max || ""}
                    onChange={handleInputChange}
                    className="input-text"
                  />
                </div>
              </div>
              <div className="form">
                <div>
                  <Label id="sal_min" label="Minimum Salary:" />
                </div>
                <div>
                  <Input
                    type="number"
                    name="sal_min"
                    value={editData.sal_min || ""}
                    onChange={handleInputChange}
                    className="input-text"
                  />
                </div>
              </div>
              <div className="form">
                <div>
                  <Label id="sal_max" label="Maximum Salary:" />
                </div>
                <div>
                  <Input
                    type="number"
                    name="sal_max"
                    value={editData.sal_max || ""}
                    onChange={handleInputChange}
                    className="input-text"
                  />
                </div>
              </div>
              <div className="form">
                <div>
                  <Label id="total_employee" label="Total employees:" />
                </div>
                <div>
                  <Input
                    type="number"
                    name="total_employee"
                    value={editData.total_employee || ""}
                    onChange={handleInputChange}
                    className="input-text"
                  />
                </div>
              </div>
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button
                onClick={handleSave}
                label="Save"
                type="button"
                style={{ backgroundColor: "darkred" }}
              />
              <Button
                onClick={onCancel}
                label="Cancel"
                type="button"
                style={{ backgroundColor: "darkgreen" }}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditCard;
