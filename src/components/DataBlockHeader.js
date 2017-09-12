import React from 'react';

const DataBlockHeader = ({icon, summary}) => (
  <div>
      <img src={getIcon(icon)} />
      <p>summary</p>
  </div>
)

export default DataBlockHeader
