import React from 'react';
import "./App.css";
import { AppRoutes } from '../routes/AppRoutes';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </>
  )
}

export default App