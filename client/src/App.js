import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Alerts from './pages/Alerts.jsx';
import SupplyManagement from './pages/SupplyManagement.jsx';

const App = () => {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Dashboard" element={<Home />} />
          <Route path="/Alerts" element={<Alerts />} />
          <Route path="/Supply Management" element={<SupplyManagement />} />
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;