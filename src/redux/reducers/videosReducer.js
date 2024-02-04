import { SET_ALL_VIDEOS, UPDATE_INDIVIDUAL_VIDEO } from '../actions/actionTypes'

const initialState = {
  savedVideos: []
}

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_VIDEOS:
      return {
        ...state,
        savedVideos: action.payload
      }
    case UPDATE_INDIVIDUAL_VIDEO:
      const updatedIndex = state.savedVideos.findIndex(
        (video) => video.title === action.payload.title
      )
      if (updatedIndex !== -1) {
        const updatedVideos = [...state.savedVideos]
        updatedVideos[updatedIndex] = action.payload
        return {
          ...state,
          savedVideos: updatedVideos
        }
      }
      return state
    default:
      return state
  }
}

export default videosReducer
