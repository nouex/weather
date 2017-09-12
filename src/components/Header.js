import React from 'react';
import cities from "cities"
import iconToUrl from "../utils/iconToUrl"
import PropTypes from 'prop-types'
import moment from "moment-timezone"

const Header = ({ latitude, longitude, icon, time, timezone, temperature }) => {
  let city = cities.gps_lookup(latitude, longitude)
  let location = `${city.city}, ${city.state_abbr}`
  
  return (
    <div>
      <img src={iconToUrl(icon)} />
      <div>{temperature}°F</div>
      <div>
        <div>{location}</div>
        <div><date>{ moment.tz(time, timezone).format('h:mma z') }</date></div>
      </div>
    </div>
  )
}

Header.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  time:  PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
}

export default Header
