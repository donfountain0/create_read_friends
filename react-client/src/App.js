import React from 'react';
import "./App.css";
import Form from "./components/Form.js";
import Friends from "./components/Friends.js";

function App() {
  return(
    <div className = "App">
      <header>
        <h1> Friends App</h1>
      </header>
      <Form />
      <Friends/>
      
    </div>
  );
}


export default App;