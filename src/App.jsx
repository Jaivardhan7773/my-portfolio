import './index.css'
import Navbar from './navbar/Navbar'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './pages/Skills';
import SplashCursor from './components/splashcursor/SplashCursor'
import CurvedLoop from './components/curved/CurvedLoop'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import React from 'react'
import './App.css'
import Projects from './pages/Projects';

function App() {


  return (
    <>

    
   {/* <SplashCursor /> */}
   <Navbar/>
   <Home/>
   <Skills/>

   {/* <div className='pt-5'>
<CurvedLoop 
  marqueeText="MERN ✦ Stack ✦ Developer ✦ React ✦ Node ✦ MongoDB ✦ Express ✦"
  speed={4}
  curveAmount={0}
  direction="right"
  interactive={true}
  className="custom-text-style"
/>
  </div> */}
  
  {/* <Projects/> */}

<Contact/>

{/* <Footer/> */}

   
    </>
  )
}

export default App
