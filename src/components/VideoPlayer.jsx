import { forwardRef } from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = forwardRef(({ video, videoPaused, videoStopped }, ref) => {
  return (
    <div className='row mb-5'>
      <div className='col-md-4'>
        <ReactPlayer
          ref={ref}
          url={`/videos/${video.file}`}
          controls
          width='100%'
          height='auto'
          muted={true}
          onPause={() => videoPaused(video, ref)}
          onEnded={() => videoStopped(video, ref)}
        />
        <p>Time: {video.time}</p>
      </div>
      <div className='col-md-8'>
        <h2>{video.title}</h2>
        <p>{video.desc}</p>
      </div>
    </div>
  )
})

export default VideoPlayer
