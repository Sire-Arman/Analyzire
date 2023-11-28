import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/alert";
import { BrowserRouter as Router,Routes, Link, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("dark");
  const [bn, setBn] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const removeBodyClasses = ()=>{
document.body.classList.remove("bg-success")
document.body.classList.remove("bg-light")
document.body.classList.remove("bg-dark")
document.body.classList.remove("bg-danger")
document.body.classList.remove("bg-warning")
  };
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode=== "light") {
      setMode("dark");
      setBn("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title = "Analyzire - Light Mode";
    } else {
      setMode("light");
      setBn("dark");
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark mode enabled", "success");
      document.title = "Analyzire - Dark Mode";
    }
  };
  return (
    <>
      <Navbar mode={mode} btn={bn} togglemode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />}></Route>
          <Route
            path="/"
            element={
              <TextForm heading="Analyzire" mode={mode} showAlert={showAlert} />
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
