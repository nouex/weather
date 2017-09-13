import { connect } from "react-redux"
import React from "react"
import DataBlockDropdown from "../components/DataBlockDropdown"
import actions from "../actions"
const setDataBlockName = actions.setDataBlockName

const _DataBlockDropdown = connect(null, { setDataBlockName })(DataBlockDropdown)

export default _DataBlockDropdown
