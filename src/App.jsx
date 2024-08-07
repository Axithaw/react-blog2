import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import './index.css'
import Create from './Create'
import BlogDetails from './BlogDetails'
import {Route, Routes}  from 'react-router-dom'
import NotFound from './NotFound'

export default function App() {
  return (
    <div className='content'>
        <Navbar/>
        <div className="home">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/create' element={<Create/>} />
                <Route path='/blog/:id' element={<BlogDetails/>} />
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
    </div>
  )
}
