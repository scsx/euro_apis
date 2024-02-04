import { SET_ALL_VIDEOS, UPDATE_INDIVIDUAL_VIDEO } from '../actions/actionTypes'

const initialState = [
  {
    id: 1,
    title: 'Barry Lyndon',
    time: 0
  },
  {
    id: 2,
    title: 'Farewell to Europe',
    time: 0
  },
  {
    id: 3,
    title: 'Ossessione',
    time: 0
  },
  {
    id: 4,
    title: 'Vincere',
    time: 0
  }
]

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
