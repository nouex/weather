import { connect } from "react-redux"
import React from "react"
import DataBlockCard from "../components/DataBlockCard"

function mapStateToProps(state, { dataPtKey }) {
  const dataBlk = state.data[state.dataBlockName],
        dataPt = dataBlk.data[dataPtKey]

  return Object.assign(
    {},
    dataPt,
    {
      dataBlockName: state.dataBlockName,
      timezone: state.data.timezone,
      unit: state.data.flags.units
    }
  )
}

const _DataBlockCard = connect(mapStateToProps)(DataBlockCard)

export default _DataBlockCard
