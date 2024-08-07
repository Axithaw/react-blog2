import React from 'react'
import { Link } from 'react-router-dom'
export default function BlogList({blogs, title}) {
   
  return (
    <div className='list'>
        <h2>{title}</h2>
        {

            blogs.map((blog)=>(

                <div className="profile-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                      <h2>{blog.title}</h2>
                      <p> written by {blog.author}</p>
                      
                    </Link> {/* <button onClick={()=> handleDelete(blog.id)} >Delete Blog</button> */}
                </div>
            ))
        }
    </div>
  )
}
