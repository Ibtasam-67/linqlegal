import React from 'react';

import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { Link } from 'react-router-dom';

import { sidebarData } from '../drawer/sidebarData';
import './panel.css';

const Panel = () => {
  return (
    <div className="panelbar-wrapper">
      <PanelBar>
        <PanelBarItem title={'Matters'} />
        <PanelBarItem title={'Dashboard'} />
        {sidebarData.map((item, index) => {
          // console.log(item);
          return (
            <>
              <span key={index} className="li" style={{ cursor: 'pointer' }}>
                <Link to={item.url}>{item.title}</Link>
              </span>
            </>
          );
        })}
      </PanelBar>
    </div>
  );
};

export default Panel;
