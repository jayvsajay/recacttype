type StatusProp={
    status:'loading'| 'success'|'error'
}
export const Status=(props:StatusProp)=>{
    let message
    if(props.status==='loading'){
        message='Loading'
    }else if(props.status==='success'){
        message='Data fetched successfull'
    }else if(props.status==='error'){
        message='error'
    }
    return(
        <div>
            <h2>Status={message}</h2>
        </div>
    )
}