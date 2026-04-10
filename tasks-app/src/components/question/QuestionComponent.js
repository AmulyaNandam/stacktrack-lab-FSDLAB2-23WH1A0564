import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function QuestionComponent() {
  const [tasks, setTasks] = useState([]);
  const [params, setParams] = useSearchParams();

  const status = params.get("status") || "";

  useEffect(() => {
    fetch(`http://bvrithcloud.com/api/tasks${status ? `?status=${status}` : ""}`, {
      headers: { "x-student-id": "23WH1A0564" }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data); // ✅ debug
        setTasks(Array.isArray(data) ? data : data.data || []);
      })
      .catch(err => console.log(err));
  }, [status]);

  return (
    <div>
      <h2>Tasks</h2>

      <select
        value={status}
        onChange={e =>
          setParams(e.target.value ? { status: e.target.value } : {})
        }
      >
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      {/* ✅ ALWAYS SHOW SOMETHING */}
      {tasks.length === 0 ? (
        <p>Loading or No Tasks...</p>
      ) : (
        tasks.map(t => (
          <div key={t.id}>
            <h3>{t.title}</h3>
            <p>{t.status}</p>
            <Link to={`/task/${t.id}`}>View</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default QuestionComponent;