import React from 'react';
import PropTypes from "prop-types"

const Extend = ({set}) => {
  return (
    <div>
      <label htmlFor="extend">Extend</label>
      <input
        id="extend"
        type="checkbox"
        onChange={({currentTarget: {checked}}) => {
          if (checked === true) set(true)
          else set(false) }
        }/>
    </div>
  );
}

Extend.propTypes = {
  set: PropTypes.func.isRequired
}

export default Extend
