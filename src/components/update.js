import React,{useState, useEffect} from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useHistory } from "react-router";
import axios from "axios";
function Update()
{
    const [id, setID] = useState("");
    const [Name,setName]=useState("");
    const [Password, setPassword] = useState("");
    const [Phone,setPhone]=useState("");
    const [Age,setAge]=useState("");
    const [City,setCity]=useState("");
    const [checkbox, setCheckbox] = useState(false);
    
    let history=useHistory();

    useEffect(() => {
            setID(localStorage.getItem('ID'))
            setName(localStorage.getItem('Name'));
            setPassword(localStorage.getItem('password'));
            setPhone(localStorage.getItem('Phone'));
            setAge(localStorage.getItem('Age'));
            setCity(localStorage.getItem('City'));
            setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);
    const updateAPIData=()=>
    {
        axios.put("https://613c7348270b96001798b115.mockapi.io/data/"+id,{
            Name,
            Password,
            Phone,
            Age,
            City,
            checkbox
        }).then(()=>{
            history.push('/read');
        })
        
    }
    
    
    return(
        <Form className="create-form">
            <Form.Field>
                <label>Name</label>
                <input placeholder='Name' value={Name} onChange={(e)=>{setName(e.target.value)}}/>
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password' value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </Form.Field>
            <Form.Field>
                <label>Phone</label>
                <input placeholder='Phone' value={Phone} onChange={(e)=>{setPhone(e.target.value)}}/>
            </Form.Field>
            <Form.Field>
                <label>Age</label>
                <input placeholder='Age' value={Age} onChange={(e)=>{setAge(e.target.value)}}/>
            </Form.Field>
            <Form.Field>
                <label>City</label>
                <input placeholder='City' value={City} onChange={(e)=>{setCity(e.target.value)}}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree entered datails is true'  checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
            </Form.Field>
            <Button type='submit' onClick={updateAPIData}>Submit</Button>
        </Form>
        )
}
export default Update;