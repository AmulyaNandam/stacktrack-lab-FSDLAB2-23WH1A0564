import React, { useState, useEffect } from "react";  
import { useParams } from "react-router-dom";
function TaskDetails(){
    const{id}=useParams();
    const [task,setTask]=useState(null);
    useEffect(()=>{
        fetch(`http://bvrithcloud.com/api/tasks/${id}`, {
        headers: {
          "x-student-id": "23WH1A0564"
        }
      }
    )
    .then(res => res.json())
    .then(data => setTask(data));
},[id]);
if(!task) return <p>Loading..</p>
return(
    <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
    </div>
);
}
export default TaskDetails;