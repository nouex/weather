import { connect } from "react-redux"
import React from "react"
import DataBlockSelector from "../components/DataBlockSelector"
import actions from "../actions"
const setDataBlockName = actions.setDataBlockName

const _DataBlockSelector = connect(null, { setDataBlockName })(DataBlockSelector)

export default _DataBlockSelector
