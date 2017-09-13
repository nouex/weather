import geo from "./utils/geo"
import xhr from "xhr"

function setJsonApiStatus(statusN, dataJson) {
  const actionType = "SET_JSON_API_STATUS"
  switch (statusN) {
    case 0:
      return {
        type: actionType,
        statusN,
        data: dataJson
      }
      break;

    case 1:
      return {
        type: actionType,
        statusN
      }

    default:
      throw new Error("unknown statusN")
  }
}

 function setDataBlockName(value) {
  return {
    type: "SET_DATA_BLOCK_NAME",
    value
  }
}

// TODO: log the err msg or save it in store, setJsonApiStatus(1, null,  e.msg)
function loadJsonApi(_xhr) {
  return function (dispatch) {
    geo.getLocation(function (locArr) {
      xhr({
          method: "GET",
          uri: `/weather/${locArr[0]}/${locArr[1]}`,
          json: true,
          xhr: _xhr
      }, function (err, resp, body) {
          if (err) dispatch(setJsonApiStatus(1))
          if (+resp.statusCode !== 200) dispatch(setJsonApiStatus(1))
          else dispatch(setJsonApiStatus(0, body))
      })
    }, function (err) {
      dispatch(setJsonApiStatus(1))
    })
  }
}

const actions = {
  setDataBlockName,
  loadJsonApi,
  setJsonApiStatus
}

export default actions
