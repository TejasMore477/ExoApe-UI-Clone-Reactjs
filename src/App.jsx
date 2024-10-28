import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/landingpage/LandingPage'
import Work from './components/work/Work'

function App() {
  return (
    <div className='w-full overflow-x-hidden'>
      <Navbar/>
      <LandingPage/>
      <Work/>
    </div>
  )
}

export default App