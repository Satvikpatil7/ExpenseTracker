// ExpRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import Expense from '../components/Expense';
import Asset from '../components/Asset';

const ExpRoutes = () => {
  return (
    <Routes> {/* Change Switch to Routes */}
      
      <Route path="/" element={<Expense />} /> {/* Use element prop instead of component */}
      <Route path="/income" element={<Asset />} /> {/* Use element prop instead of component */}
    </Routes>
  );
};

export default ExpRoutes;