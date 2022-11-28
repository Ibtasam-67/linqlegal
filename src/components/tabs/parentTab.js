import React, { useState } from 'react';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

import { tabs } from '../../constants/appConstants';
import { useNavigate, Outlet } from 'react-router-dom';

const Title = (props) => {
  return (
    <>
      <img className="tab-image" src={props.tab.image} alt="tab-image" />
      <button onClick={props.onClick}>{props.tab.title}</button>
    </>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(0);

  const navigate = useNavigate();
  // const navigate=useNavigate()
  const handleSelect = (e) => {
    navigate();
    // setSelected(e.selected);
    // console.log(e.selected);
  };
  return (
    <div className="demo-wrapper">
      <TabStrip selected={selected}>
        {tabs.map((tab, index) => {
          return (
            <TabStripTab
              title={
                <Title
                  tab={tab}
                  onClick={() => {
                    console.log('wooking');
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
