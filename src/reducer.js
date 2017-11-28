'use strict';

const initState = {
  jsonApiStatus: -1,
  dataBlockName: "hourly",
  page: 1,
  pageInterval: 5,
  localTime: null, // NOTE: UNIX time (secs not ms)
  requestParams: { // dark sky defaults
    lang: "en",
    units: "auto"
  }
}

const boolRequestParameters = {
  extend: "hourly"
}

function mainReducer(state = initState, action) {
  switch(action.type) {
    case "SET_DATA_BLOCK_NAME":
      // also reset pagination
      return Object.assign({}, state, {
        dataBlockName: action.value,
        page: 1
      })

    case "SET_JSON_API_STATUS":
      let targ = {}
      Object.assign(targ, state, { jsonApiStatus: action.statusN })
      action.statusN === 0 ? targ.data = action.data : void 0
      return targ

    case "UP_PAGE":
      return Object.assign({}, state, { page: state.page +1 })

    case "UP_LOCAL_TIME": // sync state.localTime
      let localTime = state.localTime === null
        ? state.data.currently.time
        : +(new Date) / 1000 // -> to UNIX time

      return Object.assign({}, state, { localTime })

    case "SET_REQUEST_PARAM":
      let {val, name} = action,
          ret = Object.assign({}, state)

      if (typeof val === "boolean") {
        if (!(name in boolRequestParameters)) {
          throw new Error(`${name} not found in boolRequestParameters`)
        }
        if (val === true) {
          ret.requestParams[name] = boolRequestParameters[name]
        } else {
          delete ret.requestParams[name]
        }
        return ret
      } else {
        ret.requestParams[name] = val
        return ret
      }

    default:
      return state;
  }
}

export default mainReducer
