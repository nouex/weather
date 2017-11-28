import React from 'react';
import PropTypes from "prop-types"

// NOTE: components/RequestParamsSelector passes down `val` as a prop but we
// don't need it cause it's an uncontrolled component
const Units = ({set}) => {
  return (
    <div>
      <label htmlFor="units">Units</label>
      <select id="units" onChange={(synEv) => {
        let {value: val} = synEv.target[synEv.target.selectedIndex]
        set(val)
      }}>
        <option value="auto" defaultValue>auto</option>
        <option value="ca">ca</option>
        <option value="uk2">uk2</option>
        <option value="us">us</option>
        <option value="si">si</option>
      </select>
    </div>
  );
}

Units.propTypes = {
  set: PropTypes.func.isRequired
}

export default Units
