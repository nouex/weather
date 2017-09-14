'use strict';
/**
 * DataBlockCard is analoguous to a "Data Point" in Dark Sky terminology
 */

import React from "react"
import PropTypes from "prop-types"
import iconToUrl from "../utils/iconToUrl"
import unixTime from "../utils/unixTime"
import moment from "moment-timezone"
import {
  Card,
  CardBlock,
  CardHeader,
} from 'react-bootstrap-card';

const DataBlockCard = ({ dataBlockName, icon, temperature, sunriseTime,
                         sunsetTime, cloudCover, humidity, dewPoint, timezone,
                         time
                       }) => {

      // NOTE: `time` is "according to the local time zone"
      let formattedTime, format, dataPtTimeFormats

      dataPtTimeFormats = {
        "minutely": "h:mma",
        "hourly": "dddd ha",
        "daily": "dddd Do"
      }
      format = dataPtTimeFormats[dataBlockName]
      formattedTime = moment(unixTime(time)).format(format)
      console.log(time, formattedTime, dataBlockName, format)

      return (
        <Card className="mb-5 d-block mx-auto w-75">
          <CardBlock>
            <CardHeader>
              { formattedTime }
            </CardHeader>
              <img class="card-img-top" src={ iconToUrl(icon) } />
              <ul>
                { dataBlockName === "minutely" ? null : <li> Temperature: { temperature }°F</li> }
                { dataBlockName === "daily" ? <li> Sunrise&#58;{ moment.tz(unixTime(sunriseTime), timezone).format('h:mma z') }</li> : null }
                { dataBlockName === "daily" ? <li> Sunset&#58;{ moment.tz(unixTime(sunsetTime), timezone).format('h:mma z') }</li> : null }
                <li> Cloud Cover: { cloudCover * 100 }%</li> /* TODO: do we need to html escape */
                <li> Humidity: { humidity * 100 }%</li> /* TODO: do we need to html escape */
                <li> Dew Point: { dewPoint }°F</li>
              </ul>
          </CardBlock>
        </Card>
      )
}

// FIXME: props that only belong to some dataBlockNames should be optional
// in propTypes.  Also, deal with optional data not present.
DataBlockCard.propTypes = {
  dataBlockName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  sunriseTime: PropTypes.number.isRequired,
  sunsetTime: PropTypes.number.isRequired,
  cloudCover: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  dewPoint: PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired
}

export default DataBlockCard
