import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Texttransform from "./pages/Texttransform";
import Navigationtw from "./components/Navigationtw";
import Tweet from "./pages/Tweet";
import ClassComponent from "./pages/ClassComponent";
import Chatbot from "./pages/Chatbot";

function App() {
  /*  const [myStyle, setmyStyle] = useState({
    color: "white",
    backgroundColor: "#282c34",
  });
  const [myBtn, setmyBtn] = useState("Enable Light Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setmyBtn("Enable Dark Mode");
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "#282c34",
      });
      setmyBtn("Enable Light Mode");
    }
  };*/

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <BrowserRouter>
      <div
        className="App"
        style={{ background: mode === "light" ? "white" : "#282c34" }}
      >
        <Navigationtw mode={mode} toggleMode={toggleMode} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <button
          className="px-4 py-1 m-2 text-sm text-white-600 font-semibold rounded-full border hover:border-transparent"
          onClick={toggleStyle}
          style={myStyle}
        >
          {myBtn}
        </button> */}
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              // label={myBtn}
              // onClick={toggleStyle}
              // style={myStyle}
              onClick={toggleMode}
            />
          </Form>
        </header>
        <Routes>
          <Route
            path="/classcomponent"
            element={<ClassComponent mode={mode} />}
          />
          <Route path="/tweet" element={<Tweet />} />
          <Route path="/pin" element={<Chatbot />} />
          <Route
            path="/"
            element={
              <Texttransform heading="Enter Text to Analyze" mode={mode} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
