import React from 'react';

// TODO: maybe export geolocation-related fns
function geoLocationEnabled() {
  // ...
}

function getLatitude() {

}

function getLongitude() {

}

const App = ({ jsonApiStatus, loadJsonApi }) => {
  switch (jsonApiStatus) {
    case null: // have not intended to load
      if (geoLocationEnabled()) {
        loadJsonApi(getLatitude(), getLongitude())
        return null
      } else {
        return (
          <h1> Geolocation must be enabled to get local weather data</h1>
        )
      }
      break;

    case 0: // successfully loaded
      return <DataPage />
      break;

    case 1: // failure loading
      return (
        <h1>Failure to retrieve json data.  Try again? ¯\_(ツ)_/¯</h1>
      )
      break;
  }
}

export default App

//
// State
// -----
// jsonApiStatus: null | success | failure
// dataBlock: "hourly"
// data: {
//
// }
