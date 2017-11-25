'use strict';

/**
 * DataBlockCard is analoguous to a "Data Point" in Dark Sky terminology
 *
 *  TODO: test
 */

import React from "react"
import PropTypes from "prop-types"
import moment from "moment-timezone"
import {
  Card,
  CardBlock,
  CardHeader,
} from 'react-bootstrap-card';
import darkSkyData from "../dark-sky-data"
import util from "../util"
const { unixTime, toInt, dataHumanizers } = util

let deepClone = (o) => JSON.parse(JSON.stringify(o));
darkSkyData.si = deepClone(darkSkyData.us);
(() => {
  const si = darkSkyData.si
  Object.assign(si.temperature, {unit: "celsius"})
  Object.assign(si.dewPoint, {unit: "celsius"})
  Object.assign(si.windSpeed, {unit: "mps"}) // meters per second
  Object.assign(si.windGust, {unit: "mps"})
  Object.assign(si.pressure, {unit: "hectopascals"})
  Object.assign(si.visibility, {unit: "km"})
  Object.assign(si.precipIntensity, {unit: "mmh"})
  Object.assign(si.precipIntensityMax, {unit: "mmh"})
  Object.assign(si.precipAccumulation, {unit: "cm"})
  Object.assign(si.apparentTemperature, {unit: "celsius"})
})()

darkSkyData.ca = deepClone(darkSkyData.si);
(() => {
  const ca = darkSkyData.ca
  Object.assign(ca.windSpeed, {unit: "kph"}) // km per second
  Object.assign(ca.windGust, {unit: "kph"})
})()

darkSkyData.uk2 = deepClone(darkSkyData.si);
(() => {
  const uk2 = darkSkyData.uk2
  Object.assign(uk2.visibility, {unit: "mi"})
  Object.assign(uk2.windSpeed, {unit: "mph"}) // miles per hour
  Object.assign(uk2.windGust, {unit: "mph"})
})()


const DataBlockCard = (props) => {
    // 1. format time
    // NOTE: `time` is "according to the local time zone"
    let formattedTime, format, dataPtTimeFormats

    dataPtTimeFormats = {
      "minutely": "h:mma",
      "hourly": "dddd ha",
      "daily": "dddd Do"
    }
    format = dataPtTimeFormats[props.dataBlockName]
    formattedTime = moment(unixTime(props.time)).format(format)

    // 2. validate data point props build card items
    const dataPtKeyInfo = darkSkyData[props.unit]
    const dataPtKeysUsed = Object.keys(dataPtKeyInfo).filter((key) => {
      if (!(key in props)) {
        if (!dataPtKeyInfo[key].optional)
          throw new Error(`non-optional key: ${key} not present`)
        else return false
      } else return true
    })

    // 3. build card items
    let indOfTemp = null, nullCts = 0, cardItems = dataPtKeysUsed.map((key, ind) => {
      let { unit, omittedByDataBlks } = dataPtKeyInfo[key]

      key === "temperature" ? indOfTemp = (ind - nullCts) : void(0)

      if (omittedByDataBlks && omittedByDataBlks.includes(props.dataBlockName)) {
        ++nullCts
        return null
      } else {
        return (
          <div key={ind} className="d-flex px-3 py-1" style={{justifyContent: "space-between"}}>
            <div className="text-secondary">{ dataPtKeyInfo[key].desc }</div>
            <div>{ dataHumanizers[dataPtKeyInfo[key].unit](props[key], "unix time" === dataPtKeyInfo[key].unit ? props.timezone : void(0)) }</div>
          </div>
        )
      }
    }).filter((item) => item !== null)

    // 4. mk sure "temperature" is at the top
    if (indOfTemp !== null) {
      cardItems.unshift(cardItems.splice(indOfTemp, 1)[0])
    }

    // 5. alternate colors for readability across row
    // doing `item.props.className` is not allowed (props is read-only)
    // workaround: wrap under a div that has "bd-light"
    // NOTE: i've thought of doing this in index.css but we would have to hard
    // code whatever bg-light is b/c there is no way of applying a css class
    // from css
    cardItems = cardItems.map((item, ind) => {
      if (ind % 2 === 1) {
        return (
          <div className="bg-light" key={item.key}>{item}</div>
        )
      } else return item
    })

    return (
      <Card className="mb-5 d-block mx-auto w-75">
        <CardBlock>
          <CardHeader>
            { formattedTime }
            {
              props.icon !== undefined ?
                (<img src="transparent.png"
                      className={ `icon-sm-${props.icon} float-right` }/>) :
                   null
            }
          </CardHeader>
            <div>
              { cardItems }
            </div>
        </CardBlock>
      </Card>
    )
}

DataBlockCard.propTypes = {
  unit: PropTypes.string.isRequired,
  dataBlockName: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  /* ...dataPt */
}

export default DataBlockCard
