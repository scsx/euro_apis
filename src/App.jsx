import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Countries from './pages/Countries'
import Error404 from './pages/Error404'
import Header from './components/Header'
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countries' element={<Countries />} />
        {/* 404 page */}
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
