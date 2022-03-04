import { isPropertySignature } from "typescript"

// type personprop={
//     name:{
//        first:string
//        last:string
//     }
// }
import { personprop } from "./Person.types"
export const Person=(props:personprop)=>{
    return(
        <div>
            {props.name.first} {props.name.last}
        </div>
    )

}