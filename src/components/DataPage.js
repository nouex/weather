import React from 'react';
import _Header from "../containers/Header"
import _DataBlock from "../containers/DataBlock"
import _DataBlockSelector from "../containers/DataBlockSelector"
import _PageRequest from "../containers/PageRequest"
import PropTypes from "prop-types"

const DataPage = ({ page, pageInterval, dataLen }) => (
  <div>
    <_Header />
    <_DataBlockSelector />
    <_DataBlock />
    { page * pageInterval >= dataLen ?
        null :
        <_PageRequest /> }
  </div>
)

DataPage.propTypes = {
  "dataLen": PropTypes.number.isRequired,
  "page": PropTypes.number.isRequired,
  "pageInterval": PropTypes.number.isRequired
}

export default DataPage
