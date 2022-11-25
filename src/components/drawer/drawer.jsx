import React from 'react';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';

import Tabs from '../tabs/tabs';
import Panel from '../panel/panel';

const SideNav = () => {
  return (
    <div>
      <Drawer position={'start'} mode={'push'} mini={true}>
        <Panel />
        <DrawerContent>
          <Tabs />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SideNav;
