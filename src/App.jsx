import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Countries from './pages/Countries'
import Country from './pages/Country'
import Error404 from './pages/Error404'
import Header from './components/Header'
import FullPage from './pages/FullPage'
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        {/* <Route path="/users">
    <Route index element={<Users />} />        // "/users"
    <Route path=":id" element={<UserPage/>} /> // "/users/:id"
  </Route> */}
        <Route path='/countries' element={<Outlet />}>
          <Route index element={<Countries />} />
          <Route path=":id" element={<Country/>} />
        </Route>
        <Route path='/fullpage' element={<FullPage />} />
        {/* 404 page */}
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
