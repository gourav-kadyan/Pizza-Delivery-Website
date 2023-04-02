import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navigation from './components/Navigation'
function App(){
    return <>
        <Router>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </Router>
    </>
}

export default App;