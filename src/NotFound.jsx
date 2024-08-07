import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div>
        <h2>Sorry ...</h2>
        <p>404 page not found</p>
        <Link to="/"> Redirect to Home  </Link>
    </div>
  )
}
