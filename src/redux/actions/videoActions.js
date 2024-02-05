import { SET_ALL_VIDEOS, UPDATE_INDIVIDUAL_VIDEO } from './actionTypes'

// Action to set all videos at once
export const setAllVideos = (videos) => ({
  type: SET_ALL_VIDEOS,
  payload: videos
})

// Action to update an individual video
export const updateIndividualVideo = (updatedVideo) => ({
  type: UPDATE_INDIVIDUAL_VIDEO,
  payload: updatedVideo
})
