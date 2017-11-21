'use strict';
/**
 * DataBlockCard is analoguous to a "Data Point" in Dark Sky terminology
 *
 *  TODO: propTypes
 *  TODO:  57.99999999999999% -> 57.9%
 *  TODO: test
 */

import React from "react"
import PropTypes from "prop-types"
import util from "../util"
import moment from "moment-timezone"
import {
  Card,
  CardBlock,
  CardHeader,
} from 'react-bootstrap-card';
const { unixTime, toInt } = util


// TODO: export these two so other modules may use them
const dataPtKeyInfo = {
  cloudCover: {
    optional: true,
    unit: "percent",
    desc: "Cloud Cover"
  },
  dewPoint: {
    optional: true,
    unit: "fahrenheit",
    desc: "Dew Point"
  },
  humidity: {
    optional: true,
    unit: "percent",
    desc: "Humidity"
  },
  moonPhase: {
    optional: true,
    unit: "lunation",
    omittedByDataBlks: [ "minutely", "hourly" ],
    desc: "Moon Phase"
  },
  precipProbability: {
    optional: true,
    unit: "percent",
    desc: "Chance of Precipication"
  },
  pressure: {
    optional: true,
    unit: "millibars",
    desc: "Atmospheric Pressure"
  },
  summary: {
    optional: true,
    unit: "<as is>",
    desc: "TODO: this is summary go at top"
  },
  sunriseTime: {
    optional: true,
    unit: "unix time",
    omittedByDataBlks: [ "minutely", "hourly" ],
    desc: "Sunrise"
  },
  sunsetTime: {
    optional: true,
    unit: "unix time",
    omittedByDataBlks: [ "minutely", "hourly" ],
    desc: "Sunset"
  },
  temperature: {
    optional: true,
    unit: "fahrenheit",
    omittedByDataBlks: [ "minutely" ],
    desc: "Temperature"
  },
  temperatureHigh: {
    optional: true,
    unit: "fahrenheit",
    omittedByDataBlks: [ "minutely", "hourly" ],
    desc: "High"
  },
  temperatureLow: {
    optional: true,
    unit: "fahrenheit",
    omittedByDataBlks: [ "minutely", "hourly" ],
    desc: "Low"
  },
  windGust: {
    optional: true,
    unit: "mph",
    desc: "Wind Gust"
  },
  windSpeed: {
    optional: true,
    unit: "mph",
    desc: "Wind Speed"
  },
  visibility: {
    optional: true,
    unit: "miles",
    desc: "Visibility"
  }
}

const unitConversions = {
  percent: (val) => `${toInt(val * 100)}%`,
  fahrenheit: (val) => `${toInt(val)}°F`,
  lunation: (val) => `TODO: lunationa`,
  millibars: (val) => `${toInt(val)} Mbar`,
  "<as is>": (val) => `${val}`,
  "unix time": (val,timezone) => `${moment.tz(unixTime(val), timezone).format('h:mma z')}`,// FIXME
  mph: (val) => `${toInt(val)} mph`,
  miles: (val) => `${toInt(val)} miles`
}

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
    const dataPtKeysUsed = Object.keys(dataPtKeyInfo).filter((key) => {
      if (!(key in props)) {
        if (!dataPtKeyInfo[key].optional)
          throw new Error(`non-optional key: ${key} not present`)
        else return false
      } else return true
    })

    // 3. build card items
    let indOfTemp, cardItems = dataPtKeysUsed.map((key, ind) => {
      let { unit, omittedByDataBlks } = dataPtKeyInfo[key]

      key === "temperature" ? indOfTemp = ind : void(0)

      if (omittedByDataBlks && omittedByDataBlks.includes(props.dataBlockName))
        return null
      else {
        return (
          <div key={ind} className="d-flex px-3 py-1" style={{justifyContent: "space-between"}}>
            <div className="text-secondary">{ dataPtKeyInfo[key].desc }</div>
            <div>{ unitConversions[dataPtKeyInfo[key].unit](props[key], "unix time" === dataPtKeyInfo[key].unit ? props.timezone : void(0)) }</div>
          </div>
        )
      }
    })

    // 4. mk sure "temperature" is at the top
    if (indOfTemp !== null) {
      cardItems.unshift(cardItems.splice(indOfTemp, 1)[0])
    }

    // 5. alternate colors for readability across row
    // doing `item.props.className` is not allowed (props is read-only)
    // workaround: wrap under a div that has "bd-light"
    cardItems = cardItems.map((item, ind) => {
      if (ind % 2 === 1) {
        return (
          <div className="bg-light" key={ind}>{item}</div>
        )
      } else return item
    })

    return (
      <Card className="mb-5 d-block mx-auto w-75">
        <CardBlock>
          <CardHeader>
            { formattedTime }
            <img src="transparent.png" className={ `icon-sm-${props.icon} float-right` }/>
          </CardHeader>
            <div>
              { cardItems }
            </div>
        </CardBlock>
      </Card>
    )
}

export default DataBlockCard
