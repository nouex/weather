import { connect } from "react-redux"
import React from "react"
import Header from "../components/Header"
import actions from "../actions"

const upLocalTime = actions.upLocalTime

function mapStateToProps(state) {
  const data = state.data
  return {
    latitude: data.latitude,
    longitude: data.longitude,
    icon: data.currently.icon,
    time: data.currently.time,
    timezone: data.timezone,
    temperature: data.currently.temperature,
    summary: data.currently.summary,
    localTime: state.localTime
  }
}

const mapDispatchToProps = {
  upLocalTime
}

const _Header = connect(mapStateToProps, mapDispatchToProps)(Header)

export default _Header
