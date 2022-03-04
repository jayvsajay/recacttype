import React from "react"

type Inputprop={
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
export const Input=(props:Inputprop)=>{
    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event)
    }
    return <input type='text' value={props.value} onChange={handleInputChange}/>
}