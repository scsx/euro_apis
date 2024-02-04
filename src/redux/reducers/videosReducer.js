import * as types from '../actions/actionTypes'

const initialState = {
  videos: []
}

const videosReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.GET_VIDEOS_CURRENT_TIMES:
      return {
        ...state,
        videos: action.payload
      }
    default:
      return state
  }
}

export default videosReducer
