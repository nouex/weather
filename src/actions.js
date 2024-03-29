import util from "./util"
import xhr from "xhr"
import queryString from "query-string"
const geo = util.geo

function setJsonApiStatus(statusN, dataJson, msg) {
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
      // NOTE: idrk what to do with the msg, ideally once the app advances we
      //  should notify the user about the error, they might be able to adjust
      //  for a fix (e.g. enabling geolocation api )
      msg ? console.log("Error passed to setJsonApiStatus(1)", msg) : void 0
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
function loadJsonApi(_xhr, cb = () => {}) {
  return function (dispatch, getState) {
    // TODO: make sure requestParams's keys and values are uri encoded
    let params = queryString.stringify(getState().requestParams)
    params.length > 0 ? params = "?" + params : void(0)
    geo.getLocation(function (locArr) {
      xhr({
          method: "GET",
          uri: `/weather/${locArr[0]}/${locArr[1]}${params}`,
          json: true,
          xhr: _xhr
      }, function (err, resp, body) {
          cb()
          if (err) dispatch(setJsonApiStatus(1, null, err.message))
          else if (+resp.statusCode !== 200)
            dispatch(setJsonApiStatus(1, null, "non 200 OK status code"))
          else dispatch(setJsonApiStatus(0, body))
      })
    }, function (err) {
      dispatch(setJsonApiStatus(1, null, err.message))
    })
  }
}

function upPage() {
  return {
    type: "UP_PAGE"
  }
}

function upLocalTime() {
  return (dispatch, gS) => {
    setTimeout(upLocalTime().bind(null, dispatch, gS), 20000)
    dispatch({type: "UP_LOCAL_TIME"})
  }
}

function setRequestParam(name, val) {
  return {
    type: "SET_REQUEST_PARAM",
    name,
    val
  }
}

const actions = {
  setDataBlockName,
  loadJsonApi,
  setJsonApiStatus,
  upPage,
  upLocalTime,
  setRequestParam
}

export default actions
