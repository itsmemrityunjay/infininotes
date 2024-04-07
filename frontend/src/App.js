import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutersMain from './components/routes/RoutersMain';
import Home from "../src/pages/Home";
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginSignUp from './pages/LoginSignUp';
import Sem1 from './pages/Sem1'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoutersMain />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/sem" element={<Sem1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
