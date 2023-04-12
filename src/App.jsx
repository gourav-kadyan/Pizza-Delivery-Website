import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navigation from './components/Navigation'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Detail from './pages/Detail'
function App(){
    return <>
        <Router>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route exact path="/products" element={<Products/>}></Route>
                <Route path="/product/:_id" element={<Detail/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
        </Router>
    </>
}

export default App;