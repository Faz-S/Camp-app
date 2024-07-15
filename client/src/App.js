import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Alerts from './components/subpages/Alerts.jsx';
import SupplyManagement from './components/subpages/SupplyManagement.jsx';
import DataEntry from './components/subpages/DataEntry.jsx';
import Register from './pages/Register.jsx';

const App = () => {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Dashboard" element={<Home />} />
          <Route path="/Alerts" element={<Alerts />} />
          <Route path="/Data Entry" element={<DataEntry />} />
          <Route path="/Supply Management" element={<SupplyManagement />} />
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;