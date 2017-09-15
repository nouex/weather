'use strict';

const initState = {
  jsonApiStatus: -1,
  dataBlockName: "hourly",
  page: 1,
  pageInterval: 5,
  localTime: null // NOTE: UNIX time (secs not ms)
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

    case "UP_LOCAL_TIME":
      let localTime = state.localTime === null
        ? state.data.currently.time
        : state.localTime
        
      localTime += 1
      return Object.assign({}, state, { localTime })

    default:
      return state;
  }
}

export default mainReducer
