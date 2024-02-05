import { SET_ALL_VIDEOS, UPDATE_INDIVIDUAL_VIDEO } from '../actions/actionTypes'
import filmsData from '../../data/films.json'

const initialState = filmsData.films

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_VIDEOS:
      return action.payload // Assuming action.payload is an array
    case UPDATE_INDIVIDUAL_VIDEO:
      const updatedIndex = state.findIndex(
        (video) => video.id === action.payload.id
      )
      if (updatedIndex !== -1) {
        const updatedVideos = [...state]
        updatedVideos[updatedIndex] = action.payload
        return updatedVideos
      }
      return state
    default:
      return state
  }
}

export default videosReducer
