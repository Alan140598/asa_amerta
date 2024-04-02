import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Ukm from './pages/Ukm'
import Header from './components/Header'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Ukm' element={<Ukm/>}/>
        </Routes>
      </Router>
    </div>
  )
}
