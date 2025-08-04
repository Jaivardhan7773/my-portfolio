import './index.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Navbar from './navbar/Navbar'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './pages/Skills';
import SplashCursor from './components/splashcursor/SplashCursor'
import CurvedLoop from './components/curved/CurvedLoop'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import React , {useEffect} from 'react'
import './App.css'
import Projects from './pages/Projects';

function App() {
useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
  
  <Projects/>

  {/* <iframe 
  src="https://aizenx.netlify.app" 
  width="100%" 
  height="500" 
  style={{ border: 'none' }}>
</iframe> */}

<Contact/>

{/* <Footer/> */}

   
    </>
  )
}

export default App
