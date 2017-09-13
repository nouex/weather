import { connect } from "react-redux"
// TODO: rm all React imports in containers
import React from "react"
import DataBlock from "../components/DataBlock"

function mapStateToProps(state) {
  return {
    dataLen: state.data[state.dataBlockName].data.length
  }
}

const _DataBlock = connect(mapStateToProps)(DataBlock)

export default _DataBlock
