import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../style/global.css'

import Home from '../pages/Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App