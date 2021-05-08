import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../mocks/browser')
  worker.start()
}

ReactDOM.unstable_createRoot(document.getElementById("root")).render(<App />)