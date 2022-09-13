import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';

const Navbar = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/calculator" element={<Calculator />} />
    <Route path="/quote" element={<Quote />} />
  </Routes>
);

export default Navbar;
