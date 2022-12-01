import { AiFillDashboard } from 'react-icons/ai';
import { IoBriefcase } from 'react-icons/io5';
import { IoMdContact } from 'react-icons/io';

export const panelBar = [
  {
    title: 'Dashboard',
    icon: <AiFillDashboard />
  },
  {
    title: 'Matters',
    icon: <IoBriefcase />
  },
  {
    title: 'Contacts',
    icon: <IoMdContact />
  }
];

export const sidebarDataSales = [
  {
    id: 'postings',
    title: 'Postings',
    type: 'item',
    url: '/posting',
    text:"P"
  },
  {
    id: 'matter ledger',
    title: 'Matter Ledger',
    type: 'item',
    url: 'matterledger',
    text:"ML"
  },
  {
    id: 'bills',
    title: 'Bills',
    type: 'item',
    url: 'bills',
    text:"B"
  },
  {
    id: 'client-postings',
    title: 'Client Postings',
    type: 'item',
    url: 'clientpostings',
    text:"C"
  }
];

export const sidebarDataPurchases = [
  {
    id: 'suppliers',
    title: 'Suppliers',
    type: 'item',
    url: '/suppliers',
    text:"S"
  },
  {
    id: 'supplier-ledger',
    title: 'Supplier Ledger',
    type: 'item',
    url: '/supplierledger',
    text:"SL"
  },
  {
    id: 'purchace-invoice',
    title: 'Purchase Invoice',
    type: 'item',
    url: '/purchaceinvoice',
    text:"P"
  },
  {
    id: 'disburcements',
    title: 'Disburcemets',
    type: 'item',
    url: '/disburcements',
    text:"D"
  }
];

export const sidebarDataNominals = [
  {
    id: 'disburcements',
    title: 'Nominals Ledger',
    type: 'item',
    url: '/disburcements',
   text:"N"
  },
  {
    id: 'disburcements',
    title: 'Nominals Ledger',
    type: 'item',
    url: '/disburcements',
   text:"N"
  },
  {
    id: 'disburcements',
    title: 'Nominals Ledger',
    type: 'item',
    url: '/disburcements',
   text:"N"
  }
];
