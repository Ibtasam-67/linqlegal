/* eslint-disable no-unused-vars */

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

import { sales } from '../../constants/appConstants';
import {Outlet} from 'react-router-dom'
const Sales = () => {
  return (
    <div className="demo-wrapper">
      {/* <TabStrip>
        <TabStripTab>
          <div className="wrapper">
            <div className="details">
              <span
                style={{
                  fontWeight: 'bolder'
                }}> */}
      {/* {salesTabName}*/}
      {sales.map((tab, index) => {
        // console.log(tab);
        return (
          // <>{tab.title} </>  
                <button
                  style={{
                    fontWeight: 'bolder',
                    paddingRight:10
                  }}>
                  {tab.name} 
                </button>  
        );
      })}
      {/* </span>
            </div>
          </div>
        </TabStripTab>
      </TabStrip> */}
      <Outlet/>
    </div>
  );
};

export default Sales;
