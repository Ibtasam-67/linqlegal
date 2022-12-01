import React from 'react';
import { Link } from 'react-router-dom';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

import {
  sidebarDataSales,
  sidebarDataPurchases,
  sidebarDataNominals,
  panelBar
} from '../drawer/sidebarData';
import './panel.css';

const Panel = () => {
  return (
    <div  className='parent'>
      <PanelBar >
        {panelBar.map((item, index) => {
          return (
            <div className="panel-bar-items">
              <div key={index} className="icons-text">
                <span className="icons">{item.icon}</span>
                <div className="text">{item.title}</div>
              </div>
            </div>
          );
        })}

        <PanelBarItem title={'Sales'}  >
          {sidebarDataSales.map((item, index) => {
            return (
              <div key={index} className="icons-text">
                <span className="icons">{item.icon}</span>
                <Link to={item.url}>
                  <div className="text">{item.title}</div>
                </Link>
              </div>
            );
          })}
        </PanelBarItem>

        <PanelBarItem title={'Purchase'}>
          {sidebarDataPurchases.map((item, index) => {
            return (
              <div key={index} className="icons-text">
                <span className="icons">{item.icon}</span>
                <Link to={item.url}>
                  <div className="text">{item.title}</div>
                </Link>
              </div>
            );
          })}
        </PanelBarItem>
        <PanelBarItem title={'Nominal'}>
          {sidebarDataNominals.map((item, index) => {
            return (
              <div key={index} className="icons-text">
                <span className="icons">{item.icon}</span>
                <Link to={item.url}>
                  <div className="text">{item.title}</div>
                </Link>
              </div>
            );
          })}
        </PanelBarItem>
      </PanelBar>
    </div>
  );
};

export default Panel;
