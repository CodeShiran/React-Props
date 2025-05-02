import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Food from './components/Food/Food'

import craft1 from './assets/craft1.jpg'
import craft2 from './assets/craft2.jpg'
import burger from './assets/burger.jpg'
import chicken from './assets/chicken.jpg'
import herobg from './assets/hero-bg.jpg'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Food bgImg1 ={craft1} bgImg2 = {craft2} />
      <Food bgImg={chicken} />
      <Food bgImg={burger} />
      <Footer />
    </div>
  )
}

export default App