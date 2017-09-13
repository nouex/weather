import { connect } from "react-redux"
import React from "react"
import DataBlockHeader from "../components/DataBlockHeader"

function mapStateToProps(state) {
  const curr = state.data.currently

  return {
    icon: curr.icon,
    summary: curr.summary
  }
}

const _DataBlockHeader = connect(mapStateToProps)(DataBlockHeader)

export default _DataBlockHeader
