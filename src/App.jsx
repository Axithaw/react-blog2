import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import './index.css'
export default function App() {
  return (
    <div className='content'>
        <Navbar/>
        <div className="home">
            <Home/>
        </div>
    </div>
  )
}
