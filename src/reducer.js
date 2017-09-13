'use strict';

const initState = {
  jsonApiStatus: -1,
  dataBlockName: "hourly"
}

function mainReducer(state = initState, action) {
  switch(action.type) {
    case "SET_DATA_BLOCK_NAME":
      return Object.assign({}, state, { dataBlockName: action.value })

    case "SET_JSON_API_STATUS":
      let targ = {}
      Object.assign(targ, state, { jsonApiStatus: action.statusN })
      action.statusN === 0 ? targ.data = action.data : void 0
      return targ

    default:
      return state;
  }
}

export default mainReducer
