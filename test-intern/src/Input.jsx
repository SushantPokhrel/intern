import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function InputComponent(){

   const[searchParams,setSearchParams] =  useSearchParams()

   const[searchValue,setSearchValue] = useState("")
   const [color,setColor] = useState("red")
   const handleChange = (value)=>{
setColor(value)
   }
   const handleInputChange = (v)=>{
setSearchValue(v)
   }
   const handleSearch = ()=>{
    setSearchParams({
        name:searchValue,color
    })
   }
   
return <div>
    <input type="search" placeholder="search..." name="username" value={searchValue} onChange={(e)=>handleInputChange(e.target.value)}/> <button onClick={handleSearch}>search</button>
    <div>
        <select name="dropdown" id="dropdown" onChange={(e)=>handleChange(e.target.value)} defaultValue={   searchParams.get("color")||"red"}>

            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
        </select>
    </div>
</div>
}