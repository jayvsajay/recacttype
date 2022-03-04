import {useState} from 'react'

export const Logged=()=>{
    const [user,setUser1]=useState(false)
    const handlelogin=()=>{
        setUser1(true)
    }
    const handlelogout=()=>{
        setUser1(false)
    }
    return(
        <div>
            <button onClick={handlelogin}>login</button>
            <button onClick={handlelogout}>logout</button>
            <div>User is {user?'logged in':'logged out'}</div>
        </div>
    )
}