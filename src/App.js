import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Drawer from './components/drawer/drawer';

import './App.css';
import Matters from './components/matters/matters';
import Purchase from './components/purchase/purchase';
import Sales from './components/sales/sales';
import Postings from './components/Postings';
import BankPosting from './components/bankPosting';
import JournalPosting from './components/journalPosting';
import SalePosting from './components/salePosting';
import MatterPosting from './components/matterPosting';
import Home from './components/home';
import ParentTabs from './components/tabs/parentTab';

// import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
      {/* <Navbar /> */} 
     
      <Routes>
      <Route element={<Drawer />}>
      <Route path="/" element={<Home />} /> 

      {/* <Route element={<Matter />}>
          <Route path="/matter/posting" element={<Matters />} />
          <Route path="/matter/matterledger" element={<Matters />} />
        </Route> */}

 
<Route element={<ParentTabs />}> 

        <Route element={<Sales />}> 
          <Route path="/saleposting" element={<SalePosting />} /> 
          {/* <Route path="/bankposting" element={<BankPosting />} /> 
          <Route path="/bankposting" element={<BankPosting />} /> 
          <Route path="/bankposting" element={<BankPosting />} /> 
          <Route path="/bankposting" element={<BankPosting />} />  */}
        </Route> 

        <Route element={<Postings />}>
        <Route path="/matterPosting" element={<MatterPosting />} />

        {/* <Route path="/bankposting" element={<BankPosting />} /> 
        <Route path="/bankposting" element={<BankPosting />} /> 
        <Route path="/bankposting" element={<BankPosting />} /> 
        <Route path="/bankposting" element={<BankPosting />} />  */}
          
        </Route>
        <Route element={<Purchase />}>
        <Route path="/bankPosting" element={<BankPosting />} />
          <Route path="/JournalPosting" element={<JournalPosting />} />
          {/* <Route path="/purchase/bankposting" element={<Matters />} />
          <Route path="/purchase/bankposting" element={<Matters />} />
          <Route path="/purchase/bankposting" element={<Matters />} />
          <Route path="/purchase/bankposting" element={<Matters />} />
          <Route path="/purchase/bankposting" element={<Matters />} />
          <Route path="/purchase/bankposting" element={<Matters />} /> */}
        </Route>
 

 </Route>

      </Route>
      </Routes>
    </>
  );
}

export default App;
