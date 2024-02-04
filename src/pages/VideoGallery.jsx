import { useRef } from 'react'
import ReactPlayer from 'react-player'
import { useSelector, useDispatch } from 'react-redux'
import {
  setAllVideos,
  updateIndividualVideo
} from '../redux/actions/videoActions'
import Page from '../components/Page'

const VideoPlayer = () => {
  
}

const VideoGallery = () => {
  const video1 = useRef()
  const state = useSelector((state) => state)
  const savedVideos = useSelector((state) => state.savedVideos)
  const dispatch = useDispatch()

  const getVideos = () => {
    console.log(state)
    console.log(Array.isArray(savedVideos))
  }

  // Updating one individual video
  const handleUpdateIndividualVideo = () => {
    const updatedVideo = { id: 1, time: 30 }
    dispatch(updateIndividualVideo(updatedVideo))
  }

  const videoPaused = () => {
    console.log('Video paused -> save to redux')
    let currentTime = video1.current.getCurrentTime()
  }

  const videoStopped = () => {
    console.log('Video stopped -> save to redux')
  }

  return (
    <Page classes='videogal'>
      <h1 className='mb-5'>Videos</h1>

      <div>
        <button onClick={handleUpdateIndividualVideo}>
          Update Individual Video
        </button>
      </div>
      <button onClick={getVideos}>get</button>

      <ul>
        {savedVideos.map((video) => (
          <li key={video.title}>{`${video.title}: ${video.time} minutes`}</li>
        ))}
      </ul>

      <div className='container'>
        <div className='row mb-5'>
          <div className='col-md-4'>
            <ReactPlayer
              url='/videos/barry.mp4'
              controls
              width='100%'
              height='auto'
              muted={true}
              onPause={videoPaused}
              onEnded={videoStopped}
              ref={video1}
            />
          </div>
          <div className='col-md-8'>
            <h2>Barry Lyndon, 1975</h2>
            <p>
              
            </p>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-md-4'>
            <ReactPlayer
              url='/videos/farewell-to-europe.mp4'
              controls
              width='100%'
              height='auto'
              muted={true}
              onPause={videoPaused}
              onEnded={videoStopped}
            />
          </div>
          <div className='col-md-8'>
            <h2>Farewell to Europe, 2016</h2>
            <p>
              
            </p>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-md-4'>
            <ReactPlayer
              url='/videos/ossessione_1943.mp4'
              controls
              width='100%'
              height='auto'
              muted={true}
              onPause={videoPaused}
              onEnded={videoStopped}
            />
          </div>
          <div className='col-md-8'>
            <h2>Ossessione, 1943</h2>
            <p>
              
            </p>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-md-4'>
            <ReactPlayer
              url='/videos/vincere.mp4'
              controls
              width='100%'
              height='auto'
              muted={true}
              onPause={videoPaused}
              onEnded={videoStopped}
            />
          </div>
          <div className='col-md-8'>
            <h2>Vincere, 2009</h2>
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default VideoGallery
