import React from 'react';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

const Matters = () => {
  return (
    <div className="demo-wrapper">
      <TabStrip>
        <TabStripTab>
          <div className="wrapper">
            <div className="details">
              <span
                style={{
                  fontWeight: 'bolder'
                }}>
                {/* {mattersTabName} */} Metter tab here
              </span>
            </div>
          </div>
        </TabStripTab>
      </TabStrip>
    </div>
  );
};

export default Matters;
