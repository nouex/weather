import React from 'react';
import cities from "cities"
import iconToUrl from "../utils/iconToUrl"
import PropTypes from 'prop-types'

const Header = ({ latitude, longitude, icon, time, timezone, temperature }) => (
  <div>
    <img src={iconToUrl(icon)} />
    <div>{temperature}°F</div>
    <div>
      <div>{cities.gps_lookup(latitude, longitude)}</div>
      <div><date>{/* TODO */}</date></div>
    </div>
  </div>
)

Header.PropTypes = {
  latitude: PropTypes.string.isRequired,
  longitued: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  time:  PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
}

export default Header
