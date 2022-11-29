/* eslint-disable no-unused-vars */

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import { Outlet, useNavigate } from 'react-router-dom';
import { purchases } from '../../constants/appConstants';

const Purchase = () => {
  const navigate = useNavigate();

  return (
    <div>
      {purchases.map((tab, index) => {
        return (
          <TabStrip
            key={index}
            onSelect={() => {
              navigate(tab.route);
            }}>
            <TabStripTab title={tab.name}></TabStripTab>
          </TabStrip>
        );
      })}

      <Outlet />
    </div>
  );
};

export default Purchase;
