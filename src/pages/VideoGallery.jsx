import { useRef } from 'react'
import ReactPlayer from 'react-player'
import { useSelector, useDispatch } from 'react-redux'
import { setSavedVideos } from '../redux/actions/setSavedVideos'
import Page from '../components/Page'

const VideoGallery = () => {
  const video1 = useRef()

  const savedVideos = useSelector((state) => state.savedVideos)
  const dispatch = useDispatch()

  const testArray = [
    {
      title: 'Film',
      time: 12
    }
  ]
  const testArray1 = [
    {
      title: 'Other',
      time: 20
    }
  ]
  const updateVideos = () => {
    dispatch(setSavedVideos(testArray))
  }
  const updateVideos1 = () => {
    dispatch(setSavedVideos(testArray1))
  }
  const getVideos = () => {
    console.log(savedVideos)
  }


  const videoPaused = () => {
    console.log('Video paused -> save to redux')
    console.log(video1.current.getCurrentTime())
  }

  const videoStopped = () => {
    console.log('Video stopped -> save to redux')
  }

  return (
    <Page classes='videogal'>
      <h1 className='mb-5'>Videos</h1>

      <button onClick={updateVideos}>save</button>
      <button onClick={updateVideos1}>save1</button>
      <button onClick={getVideos}>get</button>

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
              Writer/producer/director Stanley Kubrick deliberately chose to
              adapt one of Thackeray's more tedious novels, "The Luck of Barry
              Lyndon," so the plot wouldn't unduly distract us from this
              sumptuous baroque feast for the eyes and ears. Shot on location in
              Ireland, England and Germany, this stunningly beautiful film has
              been rated by the Village Voice, Sight & Sound and Time as one of
              the greatest films ever made. Don't miss it. The chances of a film
              this visually magnificent ever being made again are slim to none.
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
              Stefan Zweig: Farewell To Europe tells the story of the Austrian
              writer and his life in exile from 1936 to 1942. Zweig was one of
              the most famous writers of his time.
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
              Ossessione or Obsession (in English) is a 1943 Italian film based
              on the novel, The Postman Always Rings Twice, by James M. Cain.
              Luchino Visconti’s first feature film, it is considered by many to
              be the first Italian neorealist film.
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
              The story of the descent into madness of Mussolini’s secret first
              wife, Ida Dasler, who was seduced by his passion and vigour but
              blind to the fascist dictator’s many flaws. A historical drama
              with the passion, lyricism and tragedy of a classical Italian
              opera.
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default VideoGallery
