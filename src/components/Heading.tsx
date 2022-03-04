type headprop={
    children:string
}
export const Heading=(props:headprop)=>{
    return(
            <h2>{props.children}</h2>
    )
}