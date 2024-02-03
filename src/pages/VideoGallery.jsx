import { useRef } from 'react'
import ReactPlayer from 'react-player'

const VideoGallery = () => {
  const video1 = useRef()

  const videoPaused = () => {
    console.log('Video paused -> save to redux')
    console.log(video1.current.getCurrentTime())
  }

  const videoStopped = () => {
    console.log('Video stopped -> save to redux')
  }

  return (
    <div className='row'>
      <div className='col-md-4'>
        {' '}
        <ReactPlayer
          url='/videos/atlantiques.mp4'
          controls
          width='100%'
          height='auto'
          muted={true}
          onPause={videoPaused}
          onEnded={videoStopped}
          ref={video1}
        />
      </div>
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
    </div>
  )
}

export default VideoGallery
