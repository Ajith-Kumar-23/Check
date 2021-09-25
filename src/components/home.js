import React from "react";
import { useHistory } from "react-router";

function Home()
{
    let history=useHistory();
    
    const adminPage=()=>
    {
    
        history.push('/admin');
        var y = document.getElementById("Myid1");
        var x = document.getElementById("Myid2");
       
          x.style.display = "none";
          y.style.display = "none";
        
    }

    const userPage=()=>
    {
    
        history.push('/create');
        var y = document.getElementById("Myid1");
        var x = document.getElementById("Myid2");
        
          x.style.display = "none";
          y.style.display = "none";
        
    }

    return(
      <div className="home-btn">
        <div>
            <button className="btn btn-info btn-lg" onClick={userPage} id="Myid1">User Page</button>
        </div>
        <div>
            <button className="btn btn-warning btn-lg" onClick={adminPage} id="Myid2">Admin Page</button>
        </div>
      </div>
    )
}
export default Home;