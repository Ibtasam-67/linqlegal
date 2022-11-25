// import React, { useContext } from 'react';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

// import { TabContext } from '../../contex/tabContext';

const Purchase = () => {
  // const { purchaseTabname } = useContext(TabContext);

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
                {/* {purchaseTabname} */}
                jdjd
              </span>
            </div>
          </div>
        </TabStripTab>
      </TabStrip>
    </div>
  );
};

export default Purchase;
