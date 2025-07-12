import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />

      {/* Desktop Nav Items */}
      <ul className="nav-menu large-device-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>

      <button className="logout-btn large-device-nav" type="button">
        Logout
      </button>

      {/* Mobile Nav Icons */}
      <ul className="nav-menu small-device-nav">
        <li>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-icon"
            />
          </Link>
        </li>
        <li>
          <Link to="/products">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-icon"
            />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-icon"
            />
          </Link>
        </li>
        <li>
          <button className="icon-btn" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-icon"
            />
          </button>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
