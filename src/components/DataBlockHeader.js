import React from 'react';
import PropTypes from "prop-types"
import iconToUrl from "../utils/iconToUrl"

const DataBlockHeader = ({icon, summary}) => (
  <div>
      { /* TODO: same as <Header /> mk these adjacen */ }
      <img src={iconToUrl(icon)} />
      <p>{summary}</p>
  </div>
)

DataBlockHeader.propTypes = {
  icon: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default DataBlockHeader
