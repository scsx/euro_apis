import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import CountrySelector from './components/CountrySelector'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux Country Selector App</h1>
      <CountrySelector />

      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
    </>
  )
}

export default App
