import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Countries from './pages/Countries'
import Country from './pages/country/Country'
import Error404 from './pages/Error404'
import Header from './components/Header'
import FullPage from './pages/FullPage'
import LifeExpectancy from './pages/LifeExpectancy'
import AllBlocks from './pages/AllBlocks'
import MiddleAgesArt from './pages/MiddleAgesArt'
import VideoGallery from './pages/VideoGallery'
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countries' element={<Outlet />}>
          <Route index element={<Countries />} />
          <Route path=':countryId' element={<Country />} />
        </Route>
        <Route path='/fullpage' element={<FullPage />} />
        <Route path='/all-blocks' element={<AllBlocks />} />
        <Route path='/life-expectancy' element={<LifeExpectancy />} />
        <Route path='/middle-ages-art' element={<MiddleAgesArt />} />
        <Route path='/video-gallery' element={<VideoGallery />} />
        {/* 404 page */}
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
