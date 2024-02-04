import * as types from './actionTypes'

export const setSavedVideos = (savedVideos) => ({
  type: types.SET_SAVED_VIDEOS,
  payload: savedVideos
})