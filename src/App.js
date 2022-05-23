import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const func = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#122131';
      showAlert("Dark mode is On", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode is OFF", "success");
    }
  }
  return (
    <>
      <Navbar text="textutils" mode={mode} func={func} />
      <Alert alert={alert} />
        {/* <Routes> */}
          <TextForm heading="Exter The Text to Analyze below" mode={mode} showAlert={showAlert} />
          {/* <Route exact path="/about" element={<About />} /> */}
        {/* </Routes> */}
    </>
  );
}

export default App;
