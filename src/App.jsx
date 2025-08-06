import React , {useEffect} from 'react'
import './index.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Navbar from './navbar/Navbar'
import toast, { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './pages/Skills';
import SplashCursor from './components/splashcursor/SplashCursor'
import CurvedLoop from './components/curved/CurvedLoop'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
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
    <Toaster position="bottom-center" />
   {/* <SplashCursor /> */}
   <Navbar/>
   <Home/>
   <Skills/>



  
  <Projects/>



<Contact/>


{/* <Footer/> */}

   
    </>
  )
}

export default App
