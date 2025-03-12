import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Giraffe from "../Giraffe/Giraffe.js";
import Lion from "../Lion/Lion.js";
import Zebra from "../Zebra/Zebra.js";


export default function App() {
  return (
    <div>
      <h1>Kruger Wildlife</h1>
      <BrowserRouter>
        <nav>
          <ol>
            <li><Link to="/giraffe">giraffe</Link></li>
            <li><Link to="/lion">lion</Link></li>
            <li><Link to="/zebra">zebra</Link></li>
          </ol>

        </nav>

        <Routes>
          <Route path="/giraffe" element={<Giraffe />} />
          <Route path="/lion" element={<Lion />} />
          <Route path="/zebra" element={<Zebra />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

