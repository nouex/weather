import { connect } from "react-redux"
import React from "react"
import App from "../components/App"
import actions from "../actions"
const loadJsonApi = actions.loadJsonApi

function mapStateToProps(state) {
  return {
    jsonApiStatus: state.jsonApiStatus
  }
}

const _App = connect(mapStateToProps, { loadJsonApi })(App)

export default _App
