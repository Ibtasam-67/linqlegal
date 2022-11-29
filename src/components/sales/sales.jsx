/* eslint-disable no-unused-vars */

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import { Outlet, useNavigate } from 'react-router-dom';

// import { sales } from '../../constants/appConstants';
const Sales = () => {
  const navigate = useNavigate();

  return (
    <div className="demo-wrapper">
      {/* {sales.map((tab, index) => {
        // console.log(tab);
        return (
          <>
            <button
              
              onClick={() => {
                navigate(tab.route);
              }}>
              {tab.name}
            </button>
          </>
           
        );
      })} */}
      <Outlet />
    </div>
  );
};

export default Sales;
