import { useRef, forwardRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setAllVideos,
  updateIndividualVideo
} from '../redux/actions/videoActions'
import Page from '../components/Page'
import VideoPlayer from '../components/VideoPlayer'

const VideoGallery = () => {
  const savedVideos = useSelector((state) => state.savedVideos)
  const dispatch = useDispatch()
  const childRefs = Array.from(savedVideos, () => useRef())

  const videoPaused = (video, ref) => {
    console.log('Video paused -> save to redux')
    let currentTime = ref.current.getCurrentTime()
    let updatedVideo = {
      ...video,
      time: currentTime
    }
    dispatch(updateIndividualVideo(updatedVideo))
  }

  return (
    <Page classes='videogal'>
      <h1 className='mb-5'>Video Gallery</h1>
      <div className='container'>
        {childRefs.map((ref, index) => (
          <VideoPlayer
            key={index}
            ref={ref}
            video={savedVideos[index]}
            videoPaused={() => videoPaused(savedVideos[index], ref)}
          />
        ))}
      </div>
    </Page>
  )
}

export default VideoGallery
