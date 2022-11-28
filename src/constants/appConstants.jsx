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
    route: 'matterPosting'
  },
  {
    title: 'Sales',
    image: `${imagesUrl}rain.png`,
    component: <Sales />,
    route: 'salePosting'
  },
  {
    title: 'Purchase',
    image: `${imagesUrl}sun.png`,
    component: <Purchase />,
    route: 'bankPosting'
  }
];

export const matters = ['Matter Ledger'];

export const sales = [
  {
    name: 'Sale Posting',
    route: 'posting'
  }
];

export const postings = [
  {
    name: 'Matter Ledgers',
    route: 'ledger'
  },
  {
    name: 'Bills',
    route: 'bills'
  },
  {
    name: 'Clients Postings',
    route: 'clientposting'
  }
];

export const purchases = [
  {
    name: 'Suppliers',
    route: 'suppliers'
  },
  {
    name: 'Suppliers Ledger',
    route: 'supplierledger'
  },
  {
    name: 'Purchace Invoice',
    route: 'purchaceinvoice'
  },

  {
    name: 'Disburcements',
    route: 'disburcements'
  }
];
