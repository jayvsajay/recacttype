import { Name } from "./Person.types"

type PersonslistProps = {
    // arrnames:{
    //     first:string
    //     last:string
    // }[]
    arrnames:Name[]
}
export const Personlist=(props : PersonslistProps)=>{
    return(
        <div>
                {props.arrnames.map(name=>{
                    return(
                       <h2 key={name.first}>
                           {name.first}{name.last}
                       </h2> 
                    )
                })}
        </div>
    )
}