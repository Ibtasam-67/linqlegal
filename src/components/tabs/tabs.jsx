import React, { useState } from 'react';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

import { tabs } from '../../constants/appConstants';

const Title = (props) => {
  return (
    <>
      <img className="tab-image" src={props.tab.image} alt="tab-image" />
      <span>{props.tab.title}</span>
    </>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(0);
  const handleSelect = (e) => {
    setSelected(e.selected);
  };
  return (
    <div className="demo-wrapper">
      <TabStrip selected={selected} onSelect={handleSelect}>
        {tabs.map((tab, index) => {
          return (
            <TabStripTab title={<Title tab={tab} />} key={index}>
              <div className="wrapper">
                <div className="details">
                  <span
                    style={{
                      fontWeight: 'bolder'
                    }}>
                    {tab.component}
                  </span>
                </div>
              </div>
            </TabStripTab>
          );
        })}
      </TabStrip>
    </div>
  );
};

export default Tabs;
