import { useState,useEffect } from 'react'
export default function useFetch(url) {

    const [data , setData]= useState(null) ;
   const [isPending, SetisPending] = useState(true)
   const [error , setError] = useState(null)
    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
            .then(res=>{
                if(!res.ok){
                    throw Error('could not fetch the data from that resources')
                }
                return res.json()})
            .then(data=> {setData(data)
                // console.log(data)
                SetisPending(false)
                setError(null)
            })
            .catch(err => {
                SetisPending(false)
                setError(err.message)})
        },1000);
        return ()=> abortCont.abort();
    }
     
   , [url])

  return{ data, isPending, error }
}
