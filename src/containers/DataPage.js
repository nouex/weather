import { connect } from "react-redux"
import React from "react"
import DataPage from "../components/DataPage"

function mapStateToProps(state) {
  return {
    dataLen: state.data[state.dataBlockName].data.length,
    page: state.page,
    pageInterval: state.pageInterval
  }
}

const _DataPage = connect(mapStateToProps)(DataPage)

export default _DataPage
