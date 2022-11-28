import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Drawer from './components/drawer/drawer';
import Purchase from './components/purchase/purchase';
import Sales from './components/sales/sales';
import Postings from './components/Postings';
import SuppliersLedger from './components/purchaseComponenets/suppliersLedger';
import SalePosting from './components/purchaseComponenets/salePosting';
import MatterPosting from './components/matterPosting';
import Home from './components/home/home';
import ParentTabs from './components/tabs/parentTab';
import Navbar from './components/navbar/navbar';
import './App.css';
import Suppliers from './components/purchaseComponenets/suppliers';
import PurchaseInvoice from './components/purchaseComponenets/purchaseInvoice';
import Disburcements from './components/purchaseComponenets/disburcements';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route element={<Drawer />}>
          <Route path="/" element={<Home />} />

          <Route element={<ParentTabs />}>
            <Route element={<Sales />}>
              <Route path="/saleposting" element={<SalePosting />} />
            </Route>

            <Route element={<Postings />}>
              <Route path="/matterPosting" element={<MatterPosting />} />
            </Route>
            <Route element={<Purchase />}>
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/supplierledger" element={<SuppliersLedger />} />
              <Route path="/purchaceinvoice" element={<PurchaseInvoice />} />
              <Route path="/disburcements" element={<Disburcements />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
