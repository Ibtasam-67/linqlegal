/* eslint-disable no-unused-vars */

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import {  Outlet, useNavigate } from 'react-router-dom';

import { purchases } from '../../constants/appConstants';

const Sales = () => {
  const navigate=useNavigate()
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
      {purchases.map((tab, index) => {
        // console.log(tab);
        return (
          // <>{tab.title} </>  
                <button
                  style={{
                    fontWeight: 'bolder',
                    paddingRight:10
                  }}
                  onClick={
                    ()=>{
                      navigate(tab.route)
                    }
                  }
                  >
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
