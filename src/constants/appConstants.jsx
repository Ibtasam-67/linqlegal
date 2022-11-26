import Matters from '../components/matters/matters';
// import Nominals from '../components/nominal/nominal';
import Posting from '../components/purchase/purchase';
import Purchase from '../components/Postings';
import Sales from '../components/sales/sales';

const imagesUrl =
  'https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/tabstrip/';

export const tabs = [
  {
    title: 'Matters',
    image: `${imagesUrl}sun.png`,
    component: <Posting />,
    route:"matterPosting"
  },
  {
    title: 'Sales',
    image: `${imagesUrl}rain.png`,
    component: <Sales />,
    route:"salePosting"

  },
  {
    title: 'Purchase',
    image: `${imagesUrl}sun.png`,
    component: <Purchase />,
    route:"bankPosting"

  }
];

export const matters = ['Matter Ledger'];

export const sales = [
  {
    name:'sale Posting',
    route:'posting',
  } ,
   
  ];

export const postings = [
  {
    name:'Matter Ledgers',
    route:'ledger',
  } ,
  {
    name:'Bills',
    route:'bills',
  } ,
  {
    name:'Clients Postings',
    route:'clientposting',
  } ,
  ];
 

export const purchases = [
  {
    name:'Bank Posting',
    route:'bankPosting',
  } ,
  {
    name:'Journal Posting',
    route:'journalPosting',
  } ,
  
  ];


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
