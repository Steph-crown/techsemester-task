import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Pages } from "./route";

function App() {
    return (
        <div className="App">
            <Pages />
        </div>
    );
}

export default App;
