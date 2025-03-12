import React, { useState } from 'react';
import './App.css';
import Display from '../Display/Display';

export default function App() {
  const [name, setName] = useState('Julie');
  const [age, setAge] = useState('aging well');
  const [weight, setWeight] = useState(180);
  //var state = { name: 'Julie', age: 'aging well', weight: 180 };

  const clicker = (name) => {
    setName(name);
    if (name.localeCompare('Daniel') === 0) {
      setAge('TOO OLD!!');
      setWeight(200);
    } else {
      setAge('not as old as Daniel');
      setWeight(150);
    }
  }

  const renderDisplay = (data) => {
    return <Display stats={data} />;
  }

  const renderButton = (value) => {
    return (
      <button onClick={() => clicker(document.getElementById('fname').value)}>
        {value}
      </button>
    );
  }

  const state = { name: name, age: age, weight: weight };
  return (
    <div>
      <div>Enter a name: <input type="text" id="fname" name="fname" /></div>
      <div>{renderDisplay(state)}</div>
      <div>{renderButton("Button")}</div>
    </div>
  );
}