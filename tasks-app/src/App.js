import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionPage from "./pages/QuestionPage";
import TaskDetails from "./pages/TaskDetails";
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/question" element = {<QuestionPage/>}/>
        <Route path = "/task/:id" element = {<TaskDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
