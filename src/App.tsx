import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Courses from './pages/Courses';
import CreateCourse from './pages/create-course/CreateCourse';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/create" element={<CreateCourse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
