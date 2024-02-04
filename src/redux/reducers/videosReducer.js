import * as types from '../actions/actionTypes'

const initialState = {
  savedVideos: []
}

const videosReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.SET_SAVED_VIDEOS:
      return {
        ...state,
        savedVideos: [...state.savedVideos, action.payload],
      }
    default:
      return state
  }
}

export default videosReducer
