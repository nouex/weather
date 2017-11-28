import { connect } from "react-redux"
import React from "react"
import Refresh from "../components/Refresh"
import actions from "../actions"

const mapDispatchToProps = {
  loadJsonApi: actions.loadJsonApi
}

const _Refresh = connect(null, mapDispatchToProps)(Refresh)

export default _Refresh
