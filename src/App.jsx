import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Leadership from './pages/Leadership/Leadership'
import Tracks from './pages/Tracks/Tracks'
import Events from './pages/Events/Events'
function App() {


  return (
    <>
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path ="/" element={<Home />}/>
    <Route path ="/" element={<Leadership />}/>
    <Route path ="/" element={<Tracks />}/>
    <Route path ="/" element={<Events />}/>
    
    
    </Routes>
    <Footer/>
    </BrowserRouter></div>
   
 
      
    
      
    </>
  )
}

export default App
