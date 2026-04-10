import React, { useState, useEffect } from "react";  
import { useParams } from "react-router-dom";
function TaskDetails(){
    const{id}=useParams();
    const [tasks,setTasks]=useState([]);
    useEffect(()=>{
        fetch(`http://bvrithcloud.com/api/tasks/${id}`, {
        headers: {
          "x-student-id": "23WH1A0564"
        }
      }
    )
    .then(res => res.json())
    .then(data => {
  console.log(data);

  // ✅ handle both cases
  setTasks(Array.isArray(data) ? data : [data]);
});
},[id]);
if(!tasks || tasks.length === 0) return <p>Loading..</p>
return(
    <div>
        <h1>Task Details</h1>
        {Array.isArray(tasks) &&
tasks.map(t => (
  <div key={t.id}>
    <h3>{t.title}</h3>
    <p>{t.status}</p>
  </div>
))}
    </div>
);
}
export default TaskDetails;