import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataFetcher from "./DataFetcher";
import Header from "./Header/Header";
import Jobform from "./Forms/Jobform";
import Form_2 from "./Forms/Form_2";
import Modal from "./components/Modal/Modal";

function App() {
  const [form1Inputs, setForm1Inputs] = useState();

  const [opennextform, setopenNextform] = useState({
    Jobform: false,
    Form_2: false,
  });

  const openForm1 = () => {
    setopenNextform({ ...opennextform, Jobform: true, Form_2: false });
  };

  const closeForm1 = () => {
    setopenNextform({ ...opennextform, Jobform: false, Form_2: false });
  };

  const openForm2 = () => {
    setopenNextform({ ...opennextform, Jobform: false, Form_2: true });
  };

  const closeForm2 = () => {
    setopenNextform({ ...opennextform, Jobform: false, Form_2: false });
  };

  const closemodal = () => {
    setopenNextform({ Jobform: false, Form_2: false });
    document.body.style.overflow = "";
  };

  return (
    <>
      <div>
        <Header openForm1={openForm1} />
        <DataFetcher />
      </div>

      <div>
        {opennextform.Jobform && (
          <Modal isOpen={opennextform.Jobform} onClose={closemodal}>
            <Jobform
              closemodal={closemodal}
              closeForm1={closeForm1}
              openForm2={openForm2}
              closeForm2={closeForm2}
              openForm1={openForm1}
              setForm1Inputs={setForm1Inputs}
              form1Inputs={form1Inputs}
            />
          </Modal>
        )}

        {opennextform.Form_2 && (
          <Modal isOpen={opennextform.Form_2} onClose={closemodal}>
            <Form_2
              closemodal={closemodal}
              closeForm2={closeForm2}
              openForm1={openForm1}
              inputValues={form1Inputs}
            />
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
