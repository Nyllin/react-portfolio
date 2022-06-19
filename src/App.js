import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Navbar from './components/Navbar';
import { useState } from 'react';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
function App() {
 return (
    <div className="App">
      <Navbar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
          <Route path="/educations" element={<Education />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
