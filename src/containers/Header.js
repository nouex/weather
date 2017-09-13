import { connect } from "react-redux"
import React from "react"
import Header from "../components/Header"

function mapStateToProps(state) {
  const data = state.data
  return {
    latitude: data.latitude,
    longitude: data.longitude,
    icon: data.currently.icon,
    time: data.currently.time,
    timezone: data.timezone,
    temperature: data.currently.temperature
  }
}

const _Header = connect(mapStateToProps)(Header)

export default _Header
