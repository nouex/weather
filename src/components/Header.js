import React from 'react';
import cities from "cities"
import util from "../util"
import PropTypes from 'prop-types'
import moment from "moment-timezone"
const {unixTime} = util

const Header = ({ latitude, longitude, icon, time, timezone, temperature,
                  summary, localTime, upLocalTime }) => {
  let city = cities.gps_lookup(latitude, longitude)
  let location = `${city.city}, ${city.state_abbr}`

  if (localTime === null) {
    upLocalTime()
    localTime = time
  }

  return (
    <header className="sticky-top text-center bg-light align-middle p-3">
      <div style={{
        position: "absolute",
        marginRight: 0,
        marginLeft: "auto",
        left: "auto",
        right: 0
      }}
      className="m-3">{location}</div>
      { /* TODO: make img and summary adjacent */ }
      <img src="transparent.png" className={ `icon-${icon}` }/>
      <div>{ summary }</div>
      <div>{temperature}°F</div>
      <div><date>{ moment.tz(unixTime(localTime), timezone).format('h:mma z') }</date></div>
      <div className="text-secondary" style={{ fontSize: "0.8em" }}>Last updated { moment.tz(unixTime(time), timezone).fromNow() }</div>
    </header>
  )
}

Header.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  time:  PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  upLocalTime: PropTypes.func.isRequired,
  localTime: PropTypes.number
}

export default Header
