import React from 'react';
import PropTypes from "prop-types"

// NOTE: components/RequestParamsSelector passes down `val` as a prop but we
// don't need it cause it's an uncontrolled component
const Lang = ({set}) => {
  return (
    <div>
      <label htmlFor="lang">Lang</label>
      <select id="lang" onChange={(synEv) => {
        let {value: val} = synEv.target[synEv.target.selectedIndex]
        set(val)
      }}>
          <option value="en" defaultValue>English</option>
          <option value="ar">Arabic</option>
          <option value="el">Greek</option>
          <option value="de">German</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="is">Icelandic</option>
          <option value="sv">Swedish</option>
          <option value="zh">simplified Chinese</option>
      </select>
    </div>
  );
}

Lang.propTypes = {
  set: PropTypes.func.isRequired
}

export default Lang
