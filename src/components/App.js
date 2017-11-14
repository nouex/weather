import React from 'react';
import _DataPage from "../containers/DataPage"
import util from "../util"

const App = ({ jsonApiStatus, loadJsonApi }) => {
  switch (Number(jsonApiStatus)) {
    // NOTE: why -1 b/c the pos nums were take when i found out { null }
    // is not passed in jsx
    case -1: // have not intended to load
      if (util.geo.enabled()) {
        loadJsonApi()
        return null
      } else {
        return (
          <h1> Geolocation must be enabled to get local weather data</h1>
        )
      }
      break;

    case 0: // successfully loaded
      return <_DataPage />
      break;

    case 1: // failure loading
      return (
        <h1>Failure to retrieve json data.  Try again? ¯\_(ツ)_/¯</h1>
      )
      break;

    default:
      throw new TypeError("unknown `jsonApiStatus`")
  }
}

export default App
