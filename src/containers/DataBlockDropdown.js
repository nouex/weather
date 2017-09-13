import { connect } from "react-redux"
import React from "react"
import DataBlockDropdown from "../components/DataBlockDropdown"
import { setDataBlockName } from "../actions"

const _DataBlockDropdown = connect(null, { setDataBlockName })(DataBlockDropdown)

exports default _DataBlockDropdown
