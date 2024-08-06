import React, { useState } from 'react'

export default function Home() {
    
    const [name , setName] = useState('စည်သူ')
    const [count , setCount] = useState(0)

    function clicknow(){
        setName('သော်ဇင်မောင်')
        setCount(count + 1)
        console.log("အခုနှိပ်");
    }
    function enteruser(name ){
        console.log( `အသုံးပြုသူ =  ${name} `)
    }
  return (
    <div>
        <p> {name}</p>
        <p>{count}</p>
        <button onClick={clicknow}> ခုနှိပ်</button>
        <button onClick={()=>{
            enteruser('သော်ဇင်မောင်')
        }}> အသုံးပြုသူ</button>
        </div>
  )
}
