import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import useFetch from './useFetch'
export default function BlogDetails() {
    const {id} = useParams()
    const navigate = useNavigate();
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs/' +id)
    
    const handleDelete = ()=>{
        fetch('http://localhost:8000/blogs' + blogs.id, {
            method: "DELETE"
        }).then(
            navigate("/")
        )
       
    }
 return (
    <div>
        {isPending && <div>Loading ...</div>}
        {error && <div>{error}</div>}
       { blogs && <article>
            <h2>{blogs.title}</h2>
            <p>Written by {blogs.author}</p>
            <p>
                {blogs.body}
            </p>
            <button onClick={handleDelete}>Delete</button>
        </article>}
    </div>
  )
}
