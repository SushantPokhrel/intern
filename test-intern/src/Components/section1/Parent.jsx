import { useState } from "react"

export default function Parent(){
    const [value,setValue] = useState("")
    return <div>
<Child value={value} setValue={setValue}/>
{value}
    </div>
}
function Child({setValue,value}){
const [local,setLocal] = useState("")
    return <div>
    <input type="text" onChange={(e)=>setLocal(e.target.value)}/><button onClick={()=>setValue(local)}>Click me</button>
    </div>
}