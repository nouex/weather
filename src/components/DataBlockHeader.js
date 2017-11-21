import React from 'react';
import PropTypes from "prop-types"
import util from "../util"

const DataBlockHeader = ({icon, summary}) => (
  <div>
      <p>{summary}</p>
  </div>
)

DataBlockHeader.propTypes = {
  icon: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default DataBlockHeader
