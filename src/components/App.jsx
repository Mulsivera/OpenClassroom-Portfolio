import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../style/global.css"
import Home from '../pages/Home';
import Header from './Header';
import About from '../pages/About';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Skill from '../pages/Skill';
import Project from '../pages/Project';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/Project" element={<Project />} /> 
            </Routes>
        </Router>
    )
}

export default App