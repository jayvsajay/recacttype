type Containerprop={
    styles:React.CSSProperties
}
export const Container=(props:Containerprop)=>{
return (
    <div style={props.styles}>
        text content goes here
    </div>
)
}