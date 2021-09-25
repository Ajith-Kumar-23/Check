import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router";

function Create(){ 
    const [Name,setName]=useState("");
    const [Password,setPassword]=useState("");
    const [Phone,setPhone]=useState("");
    const [Age,setAge]=useState("");
    const [City,setCity]=useState("");
    const [checkbox, setCheckbox] = useState(false);
    let history=useHistory();
    let history2=useHistory();
    const postData=()=>
    {
        axios.post('https://613c7348270b96001798b115.mockapi.io/data',{
            Name,
            Password,
            Phone,
            Age,
            City,
            checkbox
        }).then(()=>{
            history.push('/user-log');
        })

    }
    const logIn=()=>
    {
        history2.push('/user-log');
    }
    return(
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Name' onChange={(e)=>{setPassword(e.target.value)}}/>
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input placeholder='Phone' onChange={(e)=>{setPhone(e.target.value)}}/>
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input placeholder='Age' onChange={(e)=>{setAge(e.target.value)}}/>
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input placeholder='City' onChange={(e)=>{setCity(e.target.value)}}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree entered datails is true' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={postData}>Submit</Button>
            </Form>
            <div>
                <b className="ihave">I already have a account</b><br/>
                <button className="btn btn-info btn-lg"  onClick={logIn}>Click Here</button>
            
                
            
            
            
            
            
            
            </div>
        </div>
        )
}

export default Create;