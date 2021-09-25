import React,{useState} from 'react';
import { useHistory } from "react-router";

function Admin()
{
    const user="ajith";
    const pass="12345";
    localStorage.setItem("user",user);
    localStorage.setItem("pass",pass);
    const [Name,setName]=useState("");
    const [Password,setPassword]=useState("");
    let history=useHistory();
    const submitData=(event)=>
    {
        event.preventDefault();
        console.log(Name,Password);
        if(Name!="" || Password!="")
        {
            if(localStorage.getItem("user")==Name && localStorage.getItem("pass")==Password)
                {
                    history.push('/read');
                }
            else
                {
                    alert("Please correct user name and password...");
                }
        }
        else
        {
            alert("Please fill all fields....");
        }
        
    }
    return(
        <div>
            <form onSubmit={submitData} className="log-form">
                <h1 className="log-head">Log-In</h1>
                <div className="uname">
                <label>UserName :</label><br/>
                <input type="name" placeholder="Enter User Name" onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="password">
                <label>Password :</label><br/>
                <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                </div><br/>

                <button className="btn btn-primary btn-lg"  type="submit" > Login </button>
            </form>
        </div>
    )
}
export default Admin;