import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/landingpage/LandingPage'
import Work from './components/work/Work'
import PlayReel from './components/PlayReel/PlayReel'
import ImagesSec from './components/spreadSection/ImagesSec'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='w-full overflow-x-hidden'>
      <Navbar/>
      <LandingPage/>
      <Work/>
      <PlayReel/>
      <ImagesSec/>
      <Footer/>
    </div>
  )
}

export default App