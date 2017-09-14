import React from 'react';
import cities from "cities"
import iconToUrl from "../utils/iconToUrl"
import PropTypes from 'prop-types'
import moment from "moment-timezone"
import unixTime from "../utils/unixTime"

const Header = ({ latitude, longitude, icon, time, timezone, temperature }) => {
  let city = cities.gps_lookup(latitude, longitude)
  let location = `${city.city}, ${city.state_abbr}`

  return (
    <header className="fixed-top text-center bg-light align-middle p-3">
      <div style={{
        position: "absolute",
        marginRight: 0,
        marginLeft: "auto",
        left: "auto",
        right: 0
      }}
      className="m-3">{location}</div>
      <img src={iconToUrl(icon)} />
      <div>{temperature}°F</div>
      <div><date>{ moment.tz(unixTime(time), timezone).format('h:mma z') }</date></div>
    </header>
  )
}

Header.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  time:  PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
}

export default Header
