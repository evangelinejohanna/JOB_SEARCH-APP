import React from "react";

import { useState } from "react";
import Button from "../components/Button/Button";
import Jobform from "../Forms/Jobform";
import Modal from "../components/Modal/Modal";
import Form_2 from "../Forms/Form_2";

const Header = () => {
  const [opennextform, setopenNextform] = useState({
    Jobform: false,
    Form_2: false,
  });

  const openJobForm = () => {
    console.log("Button clicked!");
    setopenNextform({ Jobform: true, Form_2: false });
  };

  const openForm2 = () => {
    setopenNextform({ Jobform: false, Form_2: true });
  };

  const closeJobForm = () => {
    setopenNextform({ Jobform: false, Form_2: false });
    console.log("back");
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
  return (
    <div className="heading">
      <h1>JOB SEARCH</h1>
      <div className="apply-button">
        <Button type="button" onClick={openJobForm}>
          Apply Card
        </Button>
      </div>

      {opennextform.Jobform && (
        <Modal isOpen={opennextform.Jobform} onClose={closemodal}>
          <Jobform />
        </Modal>
      )}

      {/* {opennextform.Form_2 && (
        <Modal isOpen={opennextform.Form_2} onClose={closemodal}>
          <Form_2 onprevious={openJobForm} inputValues={inputs} />
        </Modal>
      )} */}
    </div>
  );
};

export default Header;
