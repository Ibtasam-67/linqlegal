/* eslint-disable no-unused-vars */
import React from 'react';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

const Suppliers = () => {
  return (
    <div className="demo-wrapper">
      <TabStrip>
        <TabStripTab title={'Suppliers'}></TabStripTab>
      </TabStrip>
    </div>
  );
};

export default Suppliers;
