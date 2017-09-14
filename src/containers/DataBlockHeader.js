import { connect } from "react-redux"
import React from "react"
import DataBlockHeader from "../components/DataBlockHeader"

function mapStateToProps(state) {
  const dataBlk = state.data[state.dataBlockName]

  return {
    icon: dataBlk.icon,
    summary: dataBlk.summary
  }
}

const _DataBlockHeader = connect(mapStateToProps)(DataBlockHeader)

export default _DataBlockHeader
