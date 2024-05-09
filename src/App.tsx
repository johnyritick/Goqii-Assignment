import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>

  );
}

export default App;
