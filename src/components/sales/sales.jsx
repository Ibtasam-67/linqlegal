/* eslint-disable no-unused-vars */

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

import { tabs } from '../../constants/appConstants';

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
      {tabs.map((tab, index) => {
        console.log(tab);
        return (
          <>{tab.title}</>
          // <TabStripTab title={tab.title} key={index}>
          //   <div className="wrapper">
          //     <div className="details">
          //       <span
          //         style={{
          //           fontWeight: 'bolder'
          //         }}>
          //         {tab.title}
          //         hi
          //       </span>
          //     </div>
          //   </div>
          // </TabStripTab>
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
