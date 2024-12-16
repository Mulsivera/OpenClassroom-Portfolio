import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../style/global.css'

import Home from '../pages/Home';
import Footer from './Footer';
import Header from './Header';

const App = () => {
    return (
        <div>
            <Header />
            <div className="BodyContent">
                <Router>
                    <Routes>
                        <Route path="/OpenClassroom-Portfolio" element={<Home />} />
                    </Routes>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default App