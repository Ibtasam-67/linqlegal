// import React, { useContext } from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

// import { TabContext } from '../../contex/tabContext';
import './panel.css';
import { sidebarData } from '../drawer/sidebarData';
import { Link } from 'react-router-dom';

const Panel = () => {
  return (
    <div className="panelbar-wrapper">
      <PanelBar>
        <PanelBarItem title={'Matters'} />
        {sidebarData.map((item, index) => {
          console.log(item);
          return (
            <>
              <span
                key={index}
                className="li"
                style={{ cursor: 'pointer' }}
                // onClick={() => tabsClickitems(item)}
              >
                <Link to={item.url}>{item.title}</Link>
              </span>
            </>
          );
        })}
        {/* </PanelBarItem> */}
        {/* <PanelBarItem title="Dashboard" />
        <PanelBarItem title={'Matters'}>
          {matters.map((matter, index) => {
            return (
              <>
                <span
                  key={index}
                  className="li"
                  style={{ cursor: 'pointer' }}
                  onClick={() => tabsClickMatters(matter)}>
                  {matter}
                </span>
              </>
            );
          })}
        </PanelBarItem>

        <PanelBarItem title="Contacts" />

        <PanelBarItem title={'Sales'}>
          {sales.map((sale, index) => {
            return (
              <>
                <span key={index} className="li" onClick={() => tabsClickSales(sale)}>
                  {sale}
                </span>
              </>
            );
          })}
        </PanelBarItem>

        <PanelBarItem title={'Purchase'}>
          {purchases.map((purchase, index) => {
            return (
              <>
                <span key={index} className="li" onClick={() => tabsClickPurchase(purchase)}>
                  {purchase}
                </span>
              </>
            );
          })}
        </PanelBarItem> */}
      </PanelBar>
    </div>
  );
};

export default Panel;
