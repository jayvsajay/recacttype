import React from "react"

type Buttonprop={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}
export const Button=(props:Buttonprop)=>{
    return <button onClick={(event)=>props.handleClick(event,1)}>Click</button>
}