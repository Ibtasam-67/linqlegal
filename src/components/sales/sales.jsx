/* eslint-disable no-unused-vars */

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

import { sales } from '../../constants/appConstants';
import { Outlet } from 'react-router-dom';
const Sales = () => {
  return (
    <div className="demo-wrapper">
      {sales.map((tab, index) => {
        // console.log(tab);
        return (
          <TabStrip>
            <TabStripTab title={tab.name} key={index}>
              <div className="wrapper">
                <div className="details">
                </div>
              </div>
            </TabStripTab>
          </TabStrip>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Sales;
