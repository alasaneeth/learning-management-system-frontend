import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Navigation/SideBar';
import Home from "./components/Menues/Home/Index"
import Products from "./components/Menues/Products/Index"
import Dashboard from "./components/Menues/Dashboard/Index"
import Settings from "./components/Menues/Settings/Index"
import Report from "./components/Menues/Report/Index"
import Log from "./components/Menues/Log/Index"



function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/log" element={<Log />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
