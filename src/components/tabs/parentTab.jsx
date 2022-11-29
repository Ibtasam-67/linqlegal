import React, { useState } from 'react';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import { useNavigate, Outlet } from 'react-router-dom';

import { tabs } from '../../constants/appConstants';

const Title = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.tab.title}</button>
    </>
  );
};

const Tabs = () => {

  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const handleSelect = (e) => {
    setSelected(e.selected);
  };
  
  return (
    <div className="demo-wrapper">
      <TabStrip selected={selected} onSelect={handleSelect}>
        {tabs.map((tab, index) => {
          return (
            <TabStripTab
              title={
                <Title
                  tab={tab}
                  onClick={() => {
                    navigate(tab.route);
                  }}
                />
              }
              key={index}>
              <Outlet />
            </TabStripTab>
          );
        })}
      </TabStrip>
    </div>
  );
};

export default Tabs;
