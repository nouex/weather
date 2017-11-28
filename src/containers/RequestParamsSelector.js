import { connect } from "react-redux"
import React from "react"
import RequestParamsSelector from "../components/RequestParamsSelector"
import actions from "../actions"

const mapStateToProps = ({requestParams}) => {
  return {
    requestParams
  };
}

const mapDispatchToProps = {
  setRequestParam: actions.setRequestParam
}

const _RequestParamsSelector = connect(mapStateToProps, mapDispatchToProps)(RequestParamsSelector)

export default _RequestParamsSelector
