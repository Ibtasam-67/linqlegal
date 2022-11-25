/* eslint-disable no-unused-vars */

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

import { purchases } from '../../constants/appConstants';

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
      {purchases.map((tab, index) => {
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
    </div>
  );
};

export default Sales;
