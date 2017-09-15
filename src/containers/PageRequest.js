import { connect } from "react-redux"
import React from "react"
import PageRequest from "../components/PageRequest"
import actions from "../actions"

const mapDispatchToProps = {
  upPage: actions.upPage
}

const _PageRequest = connect(null, mapDispatchToProps)(PageRequest)

export default _PageRequest
