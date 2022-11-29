import { FaRegDotCircle } from 'react-icons/fa';
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
    icon: <FaRegDotCircle />
  },
  {
    id: 'matter ledger',
    title: 'Matter Ledger',
    type: 'item',
    url: 'matterledger',
    icon: <FaRegDotCircle />
  },
  {
    id: 'bills',
    title: 'Bills',
    type: 'item',
    url: 'bills',
    icon: <FaRegDotCircle />
  },
  {
    id: 'client-postings',
    title: 'Client Postings',
    type: 'item',
    url: 'clientpostings',
    icon: <FaRegDotCircle />
  }
];

export const sidebarDataPurchases = [
  {
    id: 'suppliers',
    title: 'Suppliers',
    type: 'item',
    url: '/suppliers',
    icon: <FaRegDotCircle />
  },
  {
    id: 'supplier-ledger',
    title: 'Supplier Ledger',
    type: 'item',
    url: '/supplierledger',
    icon: <FaRegDotCircle />
  },
  {
    id: 'purchace-invoice',
    title: 'Purchase Invoice',
    type: 'item',
    url: '/purchaceinvoice',
    icon: <FaRegDotCircle />
  },
  {
    id: 'disburcements',
    title: 'Disburcemets',
    type: 'item',
    url: '/disburcements',
    icon: <FaRegDotCircle />
  }
];

export const sidebarDataNominals = [
  {
    id: 'disburcements',
    title: 'Nominals Ledger',
    type: 'item',
    url: '/disburcements',
    icon: <FaRegDotCircle />
  },
  {
    id: 'disburcements',
    title: 'Nominals Ledger',
    type: 'item',
    url: '/disburcements',
    icon: <FaRegDotCircle />
  },
  {
    id: 'disburcements',
    title: 'Nominals Ledger',
    type: 'item',
    url: '/disburcements',
    icon: <FaRegDotCircle />
  }
];
