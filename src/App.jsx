import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataFetcher from "./DataFetcher";
import Header from "./Header/Header";
import Jobform from "./Forms/Jobform";
// import Button from './components/Button/Button'

function App() {
  const [opennextform, setopenNextform] = useState({
    Jobform: false,
    Form_2: false,
  });

  // const handleSubmit = () =>{
  //   // {Jobform:true,Form_2:false}
  //   // setopenNextform({Jobform:true,Form_2:false});

  // }

  const openForm1 = () => {
    setopenNextform({ ...opennextform, Jobform: true, Form_2: false });
  };

  const closeForm1 = () => {
    setopenNextform({ ...opennextform, Jobform: false, Form_2: false });
  };

  const openForm2 = () => {
    setopenNextform({ ...opennextform, Jobform: false, Form_2: true });
  };

  // const closeForm1 = () => {
  //   setopenNextform({ Jobform: false, Form_2: false });
  // };

  const closeForm2 = () => {
    setopenNextform({ ...opennextform, Jobform: false, Form_2: false });
  };
  return (
    <>
      <div>
        <Header />
        <DataFetcher />
        {/* <Jobform/> */}
      </div>

      <div>
        {opennextform.Jobform && (
          // <Jobform opennextform={opennextform} setopenNextform={setopenNextform} />
          <Jobform
            onClick={() => {
              openForm1();
              closeForm1();
            }}
          />
        )}

        {opennextform.Form_2 && (
          <Form_2
            onClick={() => {
              openForm2();
              closeForm2();
            }}
          />
        )}
      </div>
    </>
  );
}

export default App;
