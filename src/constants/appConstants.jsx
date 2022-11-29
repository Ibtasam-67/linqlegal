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
    route: 'posting'
  },
  {
    title: 'Purchase',
    image: `${imagesUrl}sun.png`,
    component: <Purchase />,
    route: 'purchase'
  }
];

export const sales = [
  {
    name: 'Postings',
    route: 'posting'
  },
  {
    name: 'Matter Ledgers',
    route: 'matterledger'
  },
  {
    name: 'Bills',
    route: 'bills'
  },
  {
    name: 'Clients Postings',
    route: 'clientpostings'
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
