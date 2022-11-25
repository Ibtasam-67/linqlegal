import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Drawer from './components/drawer/drawer';

import './App.css';
import Matters from './components/matters/matters';
import Purchase from './components/purchase/purchase';
import Sales from './components/sales/sales';
// import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Drawer />
      <Routes>
        <Route element={<Sales />}>
          <Route path="/sales/posting" element={<Matters />} />
          <Route path="/sales/matterledger" element={<Matters />} />
        </Route>

        <Route element={<Purchase />}>
          <Route path="/purchase/bankposting" element={<Matters />} />
          <Route path="/purchase/journalposting" element={<Matters />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
