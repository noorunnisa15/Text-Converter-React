import React, { useState } from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";

function Texttransform(props) {
  const [text, setText] = useState("");
  const handleUppercaseClick = () => {
    // console.log("button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapitalizeClick = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
  };

  const handleSentencecaseClick = () => {
    let newText = text.split(" ");
    newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopyText = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("button clicked on change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#282c34",
          color: props.mode === "light" ? "black" : "white",
        }}
        className="container my-3"
      >
        <div className="text-center text-4xl mt-8 max-sm:mt-3">
          Text Transform
        </div>
        <h1 className="text-left mt-4 mt-lg-5">{props.heading}</h1>
        <textarea
          className="form-control mb-2"
          id="myBox"
          cols="30"
          rows="10"
          placeholder="Enter text here"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#282c34",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
        <button
          className="px-4 py-1 m-2 text-sm text-white-600 font-semibold rounded-full border border-purple-200 hover:bg-purple-600 hover:border-transparent"
          onClick={handleUppercaseClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="px-4 py-1 m-2 text-sm text-white-600 font-semibold rounded-full border border-purple-200 hover:bg-purple-600 hover:border-transparent"
          onClick={handleLowercaseClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="px-4 py-1 m-2 text-sm text-white-600 font-semibold rounded-full border border-purple-200 hover:bg-purple-600 hover:border-transparent"
          onClick={handleCapitalizeClick}
        >
          Convert to Capitalize Case
        </button>
        <button
          className="px-4 py-1 m-2 text-sm text-white-600 font-semibold rounded-full border border-purple-200 hover:bg-purple-600 hover:border-transparent"
          onClick={handleSentencecaseClick}
        >
          Convert to Sentence Case
        </button>
        <button
          className="px-4 py-1 m-2 text-sm text-white-600 font-semibold rounded-full border border-purple-200 hover:bg-purple-600 hover:border-transparent"
          onClick={handleRemoveSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className="px-4 py-1 m-2 text-sm text-white-600 font-semibold rounded-full border border-purple-200 hover:bg-purple-600 hover:border-transparent"
          onClick={handleCopyText}
        >
          Copy All Text
        </button>
        <button
          className="px-4 py-1 m-2 text-sm text-white-600 font-semibold rounded-full border border-purple-200 hover:bg-purple-600 hover:border-transparent"
          onClick={handleClearText}
        >
          Clear All Text
        </button>
        <h2 className="my-3">Your Text Summary</h2>
        <div>
          <span>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </span>
          <b> Words</b>
        </div>
        <div className="my-2">
          <span>{text.length}</span>
          <b> Characters</b>
        </div>
        <div className="my-2">
          <span>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
          </span>
          <b>Minutes to read</b>
        </div>
        <h2 className="mt-4">Preview</h2>
        <div className="my-2">{text}</div>
        <h1 className={"text-center"}>Formik React</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 max-md:grid-cols-1 mt-8">
                <Form.Label className="lg:px-3 text-lg">Email: </Form.Label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={"p-2 border-2 border-black rounded-md mr-4"}
                  style={{
                    backgroundColor:
                      props.mode === "light" ? "white" : "#282c34",
                    color: props.mode === "light" ? "black" : "white",
                    borderColor: props.mode === "light" ? "black" : "white",
                  }}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div className="grid grid-cols-3 max-md:grid-cols-1 mt-3">
                <Form.Label className="lg:px-3 text-lg">Password: </Form.Label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={"p-2 border-2 border-black rounded-md mr-4"}
                  style={{
                    backgroundColor:
                      props.mode === "light" ? "white" : "#282c34",
                    color: props.mode === "light" ? "black" : "white",
                    borderColor: props.mode === "light" ? "black" : "white",
                  }}
                />
                {errors.password && touched.password && errors.password}
              </div>
              <button
                type="submit"
                className="grid bg-sky-500 py-2 px-3 mt-8 mx-auto text-center w-48"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
        <div className="py-8"></div>
      </div>
    </>
  );
}

export default Texttransform;
