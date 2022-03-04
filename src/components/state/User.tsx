import {useState} from 'react'
type AuthUser={
    name:string
    email:string
}
export const User=()=>{
    const [user,setUser]=useState<AuthUser>({} as AuthUser)
    const handlelogin=()=>{
        setUser({
            name:'Ajay',
            email:'ajay@gmal.com'
        })
    }
    // const handlelogout=()=>{
    //     setUser(null)
    // }
    return(
        <div>
            <button onClick={handlelogin}>login</button>
            {/* <button onClick={handlelogout}>logout</button> */}
        <div>username is{user.name}</div>
        <div>email is{user.email}</div>
        </div>
    )
}
//type assertion