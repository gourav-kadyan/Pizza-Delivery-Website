import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../CartContext'

const Navigation = () => {
    const { cart } = useContext(CartContext)

    const cartstyle = {
        background : '#F59E0D',
        display : 'flex',
        padding : '6px 12px',
        borderRadius : '50px'// border-radius : '50px' u can't write in js like this so use camelcase instead of hyphen
    }
  return (
    <>
       <nav className="container mx-auto flex items-center justify-between py-4">
            <Link to="/">
                <img style={{ height : 45 }} src="/images/logo.png" alt="logo" />
            </Link>
            <ul className="flex items-center">
                <li><Link to="/">Home</Link></li>
                <li className='ml-5'><Link to="/about">About</Link></li>
                <li className='ml-5'><Link to="/products">Products</Link></li>
                <li className='ml-5'>
                    <Link to="/cart">
                        <div style={cartstyle}>
                            <span className="mr-2">{ cart.totalItems }</span>
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