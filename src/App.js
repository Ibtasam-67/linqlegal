import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  Drawerr,
  SuppliersLedgerr,
  Supplierss,
  PurchaseInvoicee,
  Disburcementss,
  Navbarr,
  ParentTabss,
  SalePostingg,
  MatterLedgerr,
  Billss,
  ClientPostingss,
  MatterPostingg,
  Homee,
  PurchasePostingg
} from './components/index';

import SalePosting from './components/salePosting';

import './App.css';

function App() {
  return (
    <>
      <Navbarr />

      <Routes>
        <Route element={<Drawerr />}>
          <Route path="/" element={<Homee />} />

          <Route element={<ParentTabss />}>
            <Route path="/postings" element={<SalePosting />} />
            <Route path="/posting" element={<SalePostingg />} />
            <Route path="/matterledger" element={<MatterLedgerr />} />
            <Route path="/bills" element={<Billss />} />
            <Route path="/clientpostings" element={<ClientPostingss />} />

            <Route path="/matterPosting" element={<MatterPostingg />} />
            
            <Route path="/purchase" element={<PurchasePostingg />} />
            <Route path="/suppliers" element={<Supplierss />} />
            <Route path="/supplierledger" element={<SuppliersLedgerr />} />
            <Route path="/purchaceinvoice" element={<PurchaseInvoicee />} />
            <Route path="/disburcements" element={<Disburcementss />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
