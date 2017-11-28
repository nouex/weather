import React from 'react';
import PropTypes from "prop-types"
import Extend from "./RequestParamsSelectors/Extend.js"
import Lang from "./RequestParamsSelectors/Lang"
import Units from "./RequestParamsSelectors/Units"

// NOTE: for components that need a value from requestParams, pass it
// down as 'val' prop name

const RequestParamsSelector = ({requestParams, setRequestParam}) => {
  function genSetFn(name) {
    return (val) => {setRequestParam(name, val)}
  }

  return (
    <div>
      <Extend set={genSetFn("extend")}/>
      <Lang set={genSetFn("lang")} />
      <Units set={genSetFn("units")} />
    </div>
  );
}

RequestParamsSelector.propTypes = {
  requestParams: PropTypes.object.isRequired,
  setRequestParam: PropTypes.func.isRequired
}

export default RequestParamsSelector
