import React from "react";

import Button from "../components/Button/Button";
import Jobform from "../Forms/Jobform";

const Header = ({ openForm1 }) => {
  const openJobForm = () => {
    openForm1();
    if (Jobform) {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="heading">
      <h1>JOB SEARCH</h1>
      <div className="apply-button">
        <Button
          type="button"
          onClick={openJobForm}
          style={{ backgroundColor: "darkgoldenrod", color: "white" }}
        >
          Apply Card
        </Button>
      </div>
    </div>
  );
};

export default Header;
