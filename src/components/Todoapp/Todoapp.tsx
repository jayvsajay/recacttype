import React, { useState,useEffect } from 'react';
import { Form,Row,Col,Container,Table,Button} from 'react-bootstrap';
type todoType = {
    title:string,
    description:string
}
export default function Todoapp() {
    const [title,settitle]=useState<string>('');
    const [description,setDescription]=useState<string>('');
    let [todo,setTodo]=useState<todoType[]>([]);
    const [ind,setind]=useState<number>(0)
    const [isedit,setEdit]=useState<boolean>(true)
    useEffect(()=>{

    },[todo]);
    const addtodo=()=>{
        let data={title:title,description:description}
      setTodo([...todo,data])
       console.log(todo);
         
    }
    const deletetodo=(index:number)=>{
        let itm = todo;
        itm.splice(index, 1);
        setTodo(itm=>itm);  
    }
    const edit=(item:todoType,index:number)=>{
      setind(index)
      settitle(item.title);
      setDescription(item.description)
      setEdit(false)
    }
    const update=()=>{
      let itm=todo;
      itm[ind]={title:title,description:description}
      setTodo(itm=>itm)
      setEdit(true)
    }
  return <div>
      <h2>Todo list</h2>
      <Container className='mt-5'>
      <Form style={{textAlign:'justify',marginRight:'30%',marginLeft:'30%'}}>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Title
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="Enter title" name="title" onChange={(e)=>settitle(e.target.value)} value={title}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
     Description
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="Enter text" name="description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
    </Col>
  </Form.Group>
  {isedit?<Button onClick={addtodo} >Add todo</Button>:<Button onClick={update} >update</Button>}
</Form>
</Container>
<Container className='mt-5'>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Sl.No</th>
      <th>title</th>
      <th>Description</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {todo.map((item,index)=>
    <tr key={index}>
      <td>{index+1}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td><Button onClick={()=>edit(item,index)}>Update</Button>&nbsp;/&nbsp;
      <Button onClick={()=>deletetodo(index)}>Delete</Button></td>
    </tr>)}

  </tbody>
</Table>
</Container>
  </div>;
}