import { connect } from "react-redux"
import React from "react"
import DataBlockCard from "../components/DataBlockCard"

function mapStateToProps(state, { dataPtKey }) {
  const dataBlk = state.data[state.dataBlockName],
        dataPt = dataBlk.data[dataPtKey]

  return {
    dataBlockName: state.dataBlockName,
    icon: dataBlk.icon,
    summary: dataBlk.summary,
    temperature: dataPt.temperature,
    sunriseTime: dataPt.sunriseTime,
    sunsetTime: dataPt.sunsetTime,
    cloudCover: dataPt.cloudCover,
    humidity: dataPt.humidity,
    dewPoint: dataPt.dewPoint,
    timezone: state.data.timezone,
    time: dataPt.time
  }
}

const _DataBlockCard = connect(mapStateToProps)(DataBlockCard)

export default _DataBlockCard
