import React, { useContext } from 'react';

import { TabContext } from '../../contex/tabContext';

const Nominals = () => {
  const { tabName } = useContext(TabContext);
  return (
    <div>
      <div className="wrapper">
        <div className="details">
          <span
            style={{
              fontWeight: 'bolder'
            }}>
            {tabName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nominals;
