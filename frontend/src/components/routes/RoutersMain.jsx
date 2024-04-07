import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import LoginSignUp from '../../pages/LoginSignUp';
import About from '../../pages/About';
import Courses from '../../pages/Courses';

const RoutersMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login-signup" element={<LoginSignUp />} />
      </Routes>
    </>
  );
};

export default RoutersMain;
