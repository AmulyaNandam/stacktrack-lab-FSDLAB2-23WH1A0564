import React,{useEffect,useState} from "react";
import { Link,useSearchParams } from "react-router-dom";
function QuestionComponent(){
    const [tasks,setTasks]=useState([]);
    const[params,setParams]=useSearchParams();
    const status = params.get("status")||"";

    useEffect(()=>{
        fetch(`http://bvrithcloud.com/api/tasks${status?`?status=${status}`:""}`, {
        headers: {
          "x-student-id": "23WH1A0564"
        }
      }
    )
    .then(res => res.json())
    .then(data => setTasks(data));
},[status]);
return(
    <div>
        <h2>Tasks</h2>
        <select
        value={status}
        onChange={e => setParams(e.target.value ? { status: e.target.value } : {})}
      >
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        </select>
        <div>
            {tasks.map(task=>(
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.status}</p>
                    <Link to={`/task/${task.id}`}>{task.title}</Link>
                </div>
            ))}
        </div>
    </div>
);
}
export default QuestionComponent;