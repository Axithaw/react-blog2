import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>
         <h2> ဘလော့  </h2> 
         <div className='items'> 
            <Link to="/" className='asa active'> အစ</Link>
            <Link to="/create" className='fantee'>ဖန်တီး</Link>
         </div>
    </div>
  )
}
