import React from 'react';
import _DataBlockHeader from "../containers/DataBlockHeader"
import _DataBlockCard from "../containers/DataBlockCard"
import PropTypes from "prop-types"

const DataBlock = ({ dataLen, page, pageInterval}) => {
  return (
    <div className="p-3">
      <_DataBlockHeader />
      {(() => {
          let ret = []
          for ( let i = 0;
                i < dataLen && i < ( page * pageInterval );
                i++) {
            ret.push(<_DataBlockCard key={i} dataPtKey={i}/>)
          }
          return ret
      })()}
    </div>
  )
}

DataBlock.propTypes = {
  "dataLen": PropTypes.number.isRequired,
  "page": PropTypes.number.isRequired,
  "pageInterval": PropTypes.number.isRequired
}

export default DataBlock
