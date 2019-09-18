import React from "react";
import ReactDOM from "react-dom";
import Plan from "./Plan";
import "./styles.scss";
import "./mbStyles.scss";

const App = () => <Plan />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
