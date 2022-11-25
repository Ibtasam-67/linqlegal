import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Drawer from './components/drawer/drawer';

import './App.css';
import Matters from './components/matters/matters';
import Purchase from './components/purchase/purchase';
import Sales from './components/sales/sales';
import Postings from './components/Postings';
import BankPosting from './components/bankPosting';

// import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
      {/* <Navbar /> */} 
     
      <Routes>
      <Route element={<Drawer />}>

      {/* <Route element={<Matter />}>
          <Route path="/matter/posting" element={<Matters />} />
          <Route path="/matter/matterledger" element={<Matters />} />
        </Route> */}

        <Route element={<Sales />}> 
          <Route path="/bankposting" element={<BankPosting />} /> 
          {/* <Route path="/bankposting" element={<BankPosting />} /> 
          <Route path="/bankposting" element={<BankPosting />} /> 
          <Route path="/bankposting" element={<BankPosting />} /> 
          <Route path="/bankposting" element={<BankPosting />} />  */}
        </Route> 

        <Route element={<Postings />}>
        {/* <Route path="/bankposting" element={<BankPosting />} /> 
        <Route path="/bankposting" element={<BankPosting />} /> 
        <Route path="/bankposting" element={<BankPosting />} /> 
        <Route path="/bankposting" element={<BankPosting />} />  */}
          
        </Route>
        <Route element={<Purchase />}>
          {/* <Route path="/purchase/bankposting" element={<Matters />} />
          <Route path="/purchase/bankposting" element={<Matters />} />
          <Route path="/purchase/bankposting" element={<Matters />} />
          <Route path="/purchase/bankposting" element={<Matters />} />
          <Route path="/purchase/bankposting" element={<Matters />} />
          <Route path="/purchase/bankposting" element={<Matters />} /> */}
        </Route>
 

      </Route>
      </Routes>
    </>
  );
}

export default App;
