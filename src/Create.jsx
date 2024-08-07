import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Create() {
 const navigate = useNavigate();
  const [title, setTitle] =useState('')
  const [body, setBody] =useState('')
  const [author, setAuthor] =useState('mario')
  const [isPending, setIsPending] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
      const blog = {title, body, author}
      setIsPending(true)
      fetch('http://localhost:8000/blogs',{
          method: 'POST',
          body: JSON.stringify(blog),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }

      })
      .then( 
        ()=> {
          setIsPending(false)
          navigate("/")

        }
       
       
      )
  }

  return (
    <div className='create'>
        <h2>Add a New Blog</h2>
        <form 
        id='create'
        onSubmit={handleSubmit}
        action="">


          <label htmlFor="">Blog title:</label>
          <input type="text"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
           required />
          <label htmlFor=""> Blog body:</label>
          <textarea name="" id=""
          value={body}
          onChange={(e)=> setBody(e.target.value)}
         
          required></textarea>

          <select 
            value={author} 
            onChange={(e)=> setAuthor(e.target.value)}
          name="" id="">
              <option value="mario">mario</option>
              <option value="chris">chris</option>
          </select>
        { !isPending &&<button>Add Blog</button>}
        { isPending &&<button disabled>Adding ...</button>}
        
        </form>
       
    </div>
  )
}
