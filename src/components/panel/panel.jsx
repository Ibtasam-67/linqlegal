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
    <div className="parent">
      <PanelBar className="panelbar" backgroundColor="black" >
        {panelBar.map((item, index) => {
          return (
            <div className="panel-bar-items" >
              <div key={index} className="icons-text">
                <span className="icons">{item.icon}</span>
                <div className="text-head">{item.title}</div>
              </div>
            </div>
          );
        })}

        <PanelBarItem title={'Sales'}  className="item-bar">
          {sidebarDataSales.map((item, index) => {
            return (
              <div key={index} className="icons-text">
                <span className="circle">{item.text}</span>
                <Link to={item.url}>
                  <div className="text-span">{item.title}</div>
                </Link>
              </div>
            );
          })}
        </PanelBarItem>

        <PanelBarItem title={'Purchase'}  className="item-bar" >
          {sidebarDataPurchases.map((item, index) => {
            return (
              <div key={index} className="icons-text">
                <span className="circle">{item.text}</span>

                <Link to={item.url}>
                  <div className="text-span">{item.title}</div>
                </Link>
              </div>
            );
          })}
        </PanelBarItem>
        <PanelBarItem title={'Nominal'}  className="item-bar">
          {sidebarDataNominals.map((item, index) => {
            return (
              <div key={index} className="icons-text">
                <span className="circle">{item.text}</span>
                <Link to={item.url}>
                  <div className="text-span">{item.title}</div>
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
