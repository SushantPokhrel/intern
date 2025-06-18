import { useState,useRef } from "react"

export default function Debounce(){
// const[valu,setValue] = useState("")
const idRef = useRef(null)
const [data,setData] = useState([])
//  async function fetchData(){
//  const response =   await fetch("https://jsonplaceholder.typicode.com/users")

//  }
const handleChange = async(e)=>{
if(idRef.current) {
    clearTimeout(idRef.current)
}


  idRef.current =   setTimeout(async()=>{
        
 const response =   await fetch("https://jsonplaceholder.typicode.com/users")
 const d = await response.json()
 console.log(d)
setData(d)
    },500)
}
    return <div>
    <input type="text"  name="value" onChange={handleChange}/> 
    {data.map(d=>{
       return <><h1>{d.name}</h1>
        <p>{d.email}</p></> 
    })}
    </div>
}