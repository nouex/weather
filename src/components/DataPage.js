import React from 'react';
import _Header from "../containers/Header"
import _DataBlock from "../containers/DataBlock"
import _DataBlockSelector from "../containers/DataBlockSelector"

const DataPage = () => (
  <div>
    <_Header />
    <_DataBlockSelector />
    <_DataBlock />
  </div>
)

export default DataPage
