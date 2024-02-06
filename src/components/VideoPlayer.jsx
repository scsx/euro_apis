import { forwardRef, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { calcPercentage } from '../utils/utils'
import './VideoPlayer.scss'

const VideoPlayer = forwardRef(({ video, videoPaused }, ref) => {
  const [playedLength, setPlayedLength] = useState(0)

  const handleDuration = (duration) => {
    if (video.time > 0) {
      setPlayedLength(calcPercentage(duration, video.time))
      ref.current?.seekTo(video.time, 'seconds')
    }
  }

  useEffect(() => {
    if (video.time > 0) {
      setPlayedLength(
        calcPercentage(ref.current?.getDuration(), video.time || 0)
      )
    }
  }, [video.time, ref])

  return (
    <div className='row mb-5 videoplayer'>
      <div className='col-md-5'>
        <ReactPlayer
          ref={ref}
          url={`/videos/${video.file}`}
          controls
          width='100%'
          height='auto'
          muted={true}
          onPause={() => videoPaused(video, ref)}
          onDuration={handleDuration}
        />
        <div className='videoplayer__timebar'>
          <div
            className='videoplayer__timeplayed'
            style={{ width: `${playedLength}%` }}></div>
        </div>
      </div>
      <div className='col-md-7'>
        <h2 className='videoplayer__title'>{video.title}</h2>
        <p>{video.desc}</p>
      </div>
    </div>
  )
})

export default VideoPlayer
