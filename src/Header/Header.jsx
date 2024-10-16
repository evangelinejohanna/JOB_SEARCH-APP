import React from "react";

import { useState } from "react";
import Button from "../components/Button/Button";
import Jobform from "../Forms/Jobform";
import Modal from "../components/Modal/Modal";

const Header = () => {
  const [opennextform, setopenNextform] = useState({
    Jobform: false,
    Form_2: false,
  });

  const open = () => {
    console.log("Button clicked!");
    setopenNextform({ Jobform: true, Form_2: false });
  };

  const closemodal = (e) => {
    setopenNextform({ Jobform: false, Form_2: false });
    setInputs({
      company_name: "",
      industry: "",
      location: "",
      remote_type: "",
    });
  };
  return (
    <div className="heading">
      <h1>JOB SEARCH</h1>
      <div className="apply-button">
        <Button type="button" onClick={open}>
          Apply Card
        </Button>
      </div>

      {opennextform.Jobform && (
        <Modal onClose={closemodal}>
          <Jobform />
        </Modal>
      )}
    </div>
  );
};

export default Header;
