import React from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";
import { useEffect,useState } from "react";
import { Link } from 'react-router-dom';

function Read()
{
    const [APIData,setAPIData]=useState([]);
    useEffect(()=>{
        axios.get('https://613c7348270b96001798b115.mockapi.io/data').then((res)=>{
            setAPIData(res.data);
            console.log(setAPIData)
        })
    },[])
    const setData = (data) => {
        let { id, Name, Password, Phone, Age, City, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', Name);
        localStorage.setItem('password', Password);
        localStorage.setItem('Phone', Phone);
        localStorage.setItem('Age', Age);
        localStorage.setItem('City', City);
        localStorage.setItem('Checkbox Value', checkbox)
     }
     const onDelete = (id) => {
        axios.delete("https://613c7348270b96001798b115.mockapi.io/data/"+id).then(() => {
            getData();
        })
    }
    const getData = () => {
        axios.get(`https://613c7348270b96001798b115.mockapi.io/data`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
    return(
        <div>
            
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>CheckBox</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        APIData.map((data)=>{
                            return(
                                
                                    <Table.Row>
                                        <Table.Cell>{data.id}</Table.Cell>
                                        <Table.Cell>{data.Name}</Table.Cell>
                                        <Table.Cell>{data.Password}</Table.Cell>
                                        <Table.Cell>{data.Phone}</Table.Cell>
                                        <Table.Cell>{data.Age}</Table.Cell>
                                        <Table.Cell>{data.City}</Table.Cell>
                                        <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                        <Link to='/update'>
                                            <Table.Cell> 
                                                <Button onClick={()=>setData(data)}>Update</Button>
                                            </Table.Cell>
                                        </Link>
                                        <Table.Cell><Button onClick={() => onDelete(data.id)}>Delete</Button></Table.Cell>
                                    </Table.Row>
                                
                            )
                        })
                    }
                </Table.Body>
            </Table>
        </div>
    );
}
export default Read;