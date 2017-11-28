'use strict';

import React from "react"
import _DataBlockSelector from "../containers/DataBlockSelector"
import _RequestParamsSelector from "../containers/RequestParamsSelector"
import _Refresh from "../containers/Refresh"

const Controls = () => (
  <div className="m-3">
    <_DataBlockSelector />
    <_RequestParamsSelector />
    <_Refresh />
  </div>
)

export default Controls
