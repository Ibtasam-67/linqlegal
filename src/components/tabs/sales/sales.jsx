/* eslint-disable no-unused-vars */

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import { Outlet, useNavigate } from 'react-router-dom';

import { sales } from '../../../constants/appConstants';

const Sales = () => {
  const navigate = useNavigate();

  return (
    <div className="demo-wrapper">
      {sales.map((tab, index) => {
        return (
          <TabStrip
            key={index}
            onSelect={() => {
              navigate(tab.route);
            }}>
            <TabStripTab title={tab.name}></TabStripTab>
          </TabStrip>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Sales;
