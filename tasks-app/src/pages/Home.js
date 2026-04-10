import React from 'react';
import { Link } from "react-router-dom";
// TODO: Replace placeholder values with actual student and lab identifiers
const STUDENT_ID = '23WH1A0564';
const LAB_ID = 'FSDLAB2';

function Home() {
  return (
    <div>
      <h1>Stack Track Lab</h1>
      <p>Student ID: {STUDENT_ID}</p>

     <Link to="/question">Go to Question Page</Link>

    </div>
  );
}

export default Home;
