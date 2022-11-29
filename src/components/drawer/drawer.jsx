import React from 'react';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import {Outlet} from 'react-router-dom'

import Panel from '../panel/panel';

const SideNav = () => {
  return (
    <div>
      <Drawer position={'start'} mode={'push'} mini={true}>
        <Panel/>
        <DrawerContent>
          <Outlet/>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SideNav;
