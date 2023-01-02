import React, { Fragment } from 'react'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Mainhome from './Components/Home/Mainhome'
import Homenews from './Components/Movienews/Homenews'
import Navbar from './Components/Navbar/Navbar'
import Homeupco from './Components/Upcomming/Homeupco'
import Footer from './Footer/Footer'




function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Mainhome/>}/>
          <Route path='/news' element={<Homenews/>}/>
          <Route path='/movies' element={<Homeupco/>}/>
        </Routes>
        <Footer/>
      </Fragment>
    </ Router>
  )
}

export default App