type Greetprops={
    name:string
    message?:number
    islogged:boolean
}
export const Greet=(props:Greetprops)=>{
    const { message = 0 }=props
return(
    <div>
        {props.islogged?<h1>hello {props.name} this is {props.message}</h1>:"Welcome guest"}
    </div>
)
}