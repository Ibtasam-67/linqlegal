import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Drawer from './components/drawer/drawer';
import Purchase from './components/purchase/purchase';
import Sales from './components/sales/sales';
import Postings from './components/Postings';
import BankPosting from './components/bankPosting';
import JournalPosting from './components/journalPosting';
import Posting from './components/posting';
import MatterPosting from './components/matterPosting';
import Home from './components/home/home';
import ParentTabs from './components/tabs/parentTab';
import Navbar from './components/navbar/navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route element={<Drawer />}>
          <Route path="/" element={<Home />} />

          <Route element={<ParentTabs />}>
            <Route element={<Sales />}>
              <Route path="/sales/posting" element={<Posting />} />
            </Route>

            <Route element={<Postings />}>
              <Route path="/matterPosting" element={<MatterPosting />} />
            </Route>
            
            <Route element={<Purchase />}>
              <Route path="/bankPosting" element={<BankPosting />} />
              <Route path="/JournalPosting" element={<JournalPosting />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
