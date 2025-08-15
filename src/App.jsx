import { useEffect } from 'react'
import './index.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Navbar from './navbar/Navbar'
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './pages/Skills';
import Contact from './pages/Contact'
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
      <Navbar />
      <Home />
      <Skills />




      <Projects />



      <Contact />


      <footer className="bg-gray-900 text-white py-2 text-center">
        © {new Date().getFullYear()} Jaivardhan Singh. All rights reserved.
      </footer>

    </>
  )
}

export default App
