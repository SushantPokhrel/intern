import { useEffect, useState } from "react";

export default function Todo(){
    const [data,setData] = useState([])

    const fetchData = async()=>{
     const res =   await fetch("https://jsonplaceholder.typicode.com/todos")
const d=await res.json()
setData(d.slice(0,10))
console.log(d.slice(0,10))
    }

   
    useEffect(()=>{
fetchData()
    },[])
    return <div>
        {data.map(d=><div key={d.id} onClick={()=>handleComplete(d)} style={{marginBottom:"10px",borderBottom:"2px solid black"}}
        className={`${d.completed? "green":"red"} flex`}
     >
<div><h1>Title</h1>
<p>{d.title}</p>
</div>
<div >Id<span style={{display:"block"}}>{d.id}</span></div>
     </div>)}
    </div>
}