import React, { useState } from 'react';
import { Navbar } from './componnents/Navbar';
import Highlights from './componnents/Highlights';
import Hero from './componnents/Hero'
import Model from './componnents/Model';
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </>
  )
}

export default App
