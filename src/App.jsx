import { useState } from 'react'
import './App.css'
import FrontPage from "./Pages/FrontPage"
import Navbar from "./Components/Navbar"
import LoadingScreen from "./Components/LoadingScreen"
import Footer from "./Components/Footer"
import { Routes, Route } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

function App() {
  
  const [ loaded, setLoaded ] = useState(false)  

  return (
    <AnimatePresence mode="wait">
      <div className="app">
        {
          !loaded ?

          <motion.div key='loader' className="loader">
            <LoadingScreen setLoaded={setLoaded} />
          </motion.div>
            :
          <>

           <Navbar />

            <Routes>
              <Route path="/" element={<FrontPage />} />
              <Route path="*" element={<FrontPage />} />
            </Routes>

           <Footer />  
          </>
        }
      </div>
    </AnimatePresence>
  )
}

export default App
