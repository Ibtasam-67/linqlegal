import Matters from '../components/matters/matters';
// import Nominals from '../components/nominal/nominal';
import Purchase from '../components/purchase/purchase';
import Sales from '../components/sales/sales';

const imagesUrl =
  'https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/tabstrip/';

export const tabs = [
  {
    title: 'Matters',
    image: `${imagesUrl}sun.png`,
    component: <Matters />
  },
  {
    title: 'Sales',
    image: `${imagesUrl}rain.png`,
    component: <Sales />
  },
  {
    title: 'Purchase',
    image: `${imagesUrl}sun.png`,
    component: <Purchase />
  }
];

export const matters = ['Matter Ledger'];

export const sales = ['Bank Posting', 'Journal Posting', 'Sales Reports'];

export const postings = ['Matter Ledgers', 'Bills', 'Clients Postings'];

export const purchases = ['Suppliers', 'Suppliers Ledger', ' Purchase Invoice', 'Disburcements'];

export const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard'
    },

    {
      id: 'matters',
      title: 'Matters',
      type: 'item',
      url: '/matters'
    },

    {
      id: 'contacts',
      title: 'Contacts',
      type: 'item',
      url: '/contacts'
    },

    {
      id: 'sales',
      title: 'Sales',
      type: 'item',
      url: '/sales'
    },
    {
      id: 'purchace',
      title: 'Purchace',
      type: 'item',
      url: '/purchace'
    },
    {
      id: 'suppliers',
      title: 'Suppliers',
      type: 'item',
      url: '/suppliers'
    },
    {
      id: 'supplier-ledger',
      title: 'Supplier Ledger',
      type: 'item',
      url: '/supplierledger'
    }
  ]
};
