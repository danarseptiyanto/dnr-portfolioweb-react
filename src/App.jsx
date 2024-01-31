import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Homepage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BlogDetails from './BlogDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
            <Homepage/>
        }/>
        <Route exact path='/blog/:slug' element={
            <BlogDetails/>
        }/>
      </Routes>
    </Router>
  )
}

export default App
