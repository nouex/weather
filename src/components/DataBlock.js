import React from 'react';
import _DataBlockHeader from "../containers/DataBlockHeader"
import _DataBlockDropdown from "../containers/DataBlockDropdown"
import _DataBlockCard from "../containers/DataBlockCard"

const DataBlock = (dataLen) => {
  return (
    <div>
      <_DataBlockDropdown />
      <_DataBlockHeader />
      (() => {
          let ret = []
          for (let i = 0; i < dataLen; i++) {
            ret.push(<_DataBlockCard key={n} dataPtKey={n}/>)
          }
          return ret
      }());
    </div>
  )
}
