import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

function UserLogIn()
{
    const [userName,setUserName]=useState("");
    const [userPass,setUserPass]=useState("");
    const [APIData,setAPIData]=useState([]);
    let history=useHistory();
    useEffect(()=>{
        axios.get('https://613c7348270b96001798b115.mockapi.io/data').then((res)=>{
            setAPIData(res.data);
            console.log(setAPIData)
        })
    },[])
    const submitData=(event)=>
    {
        event.preventDefault();
        
        APIData.map((data)=>{
            if(userName!="" || userPass!="")
            {
                if(data.Name==userName)
                {
                    // history.push('/userpage');
                    if(data.Password == userPass)
                    {
                    alert("You Entered Correct Data....");
                    }
                    else
                    {
                        alert("You Entered Wrong Password")
                    }
                }
                else
                {
                    alert("You Entered Wrong User Name....")
                }
            }
            else
            {
                alert("Please Fill All Fields...");
            }
        })
    }
    return(
        <div className="userlog-form">
            <div className="form">
                <header>Log-In</header>
                <hr/>
                <br/>
                <form className="log-data">
                    <div>
                        <label>User Name</label><br/>
                        <input type="text" placeholder="Enter Name" onChange={(e)=>setUserName(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Password</label><br/>
                        <input type="password" placeholder="Enter password" onChange={(e)=>setUserPass(e.target.value)}></input>
                    </div>
                    <br/>
                    <div>
                        <button className="btn btn-success btn-lg" onClick={submitData}>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )

}
export default UserLogIn;