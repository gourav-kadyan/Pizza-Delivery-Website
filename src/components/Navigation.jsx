import {Link} from 'react-router-dom'

const Navigation = () => {
    const cartstyle = {
        background : '#F59E0D',
        display : 'flex'
    }
  return (
    <>
       <nav className="container mx-auto flex items-center justify-between py-4">
            <Link to="/">
                <img style={{ height : 45 }} src="/images/logo.png" alt="logo" />
            </Link>
            <ul className="flex items-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li>
                    <Link to="/cart">
                        <div style={cartstyle}>
                            <span>10</span>
                            <img src="/images/cart.png" alt="cart-icon" />
                        </div>
                    </Link>
                </li>
            </ul>
       </nav>
    </>
  )
}

export default Navigation