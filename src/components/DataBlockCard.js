'use strict';

import React from "react"
import PropTypes from "prop-types"
import iconToUrl from "../utils/iconToUrl"
import unixTime from "../utils/unixTime"
import moment from "moment-timezone"

const DataBlockCard = ({ dataBlockName, icon, summary, temperature, sunriseTime,
                         sunsetTime, cloudCover, humidity, dewPoint, timezone
                       }) => {
  return (
    <div>
      <img src={ iconToUrl(icon) } />
      <p>{ summary }</p>
      Stats:
      <ul>
        { dataBlockName === "minutely" ? null : <li> Temperature: { temperature }°F</li> }
        { dataBlockName === "daily" ? <li> Sunrise&#58;{ moment.tz(unixTime(sunriseTime), timezone).format('h:mma z') }</li> : null }
        { dataBlockName === "daily" ? <li> Sunset&#58;{ moment.tz(unixTime(sunsetTime), timezone).format('h:mma z') }</li> : null }
        <li> Cloud Cover: { cloudCover * 100 }%</li> /* TODO: do we need to html escape */
        <li> Humidity: { humidity * 100 }%</li> /* TODO: do we need to html escape */
        <li> Dew Point: { dewPoint }°F</li>
      </ul>
    </div>
  )
}

// FIXME: props that only belong to some dataBlockNames should be optional
// in propTypes
DataBlockCard.propTypes = {
  dataBlockName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  sunriseTime: PropTypes.number.isRequired,
  sunsetTime: PropTypes.number.isRequired,
  cloudCover: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  dewPoint: PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired
}

export default DataBlockCard
