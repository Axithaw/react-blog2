import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
         <h2> ဘလော့  </h2> 
         <div className='items'> 
            <a href="/" className='active'> ပင်မမျက်နှာ</a>
            <a href="/create">ဖန်တီး</a>
         </div>
    </div>
  )
}
