import { useState } from 'react'
import axios from "axios"
import './App.css'
import { useEffect } from 'react'

function App() {
  const getdata = ()=>{
    axios.get("/jokes").then((res)=>(setjokes(res.data))).catch((err)=>(console.log(err)
    ))
  }
 const [jokes,setjokes] = useState([])
// useEffect(()=>{axios.get().then(()=>().catch(()=>()))},[])
 useEffect(()=>{
getdata()
 },[])
  return (
    <> 
    <h1>jokes</h1>
    <h2>{jokes.length}</h2>


    {jokes.map((keys,index)=>(
      <div><h1 key={keys.id}>{keys.id}</h1>
      <h2>{keys.name}</h2></div>
    ))}

    </>
  )
}

export default App
