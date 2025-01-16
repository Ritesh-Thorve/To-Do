import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDo from './components/ToDo/ToDo';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
