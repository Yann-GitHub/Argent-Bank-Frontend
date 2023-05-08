import { NavLink } from "react-router-dom"
import Logo from "../../assets/argentBankLogo.png"

/**
 * Component for displaying the header with navigation links.
 *
 * @returns {JSX.Element} - React Component - Header.
 */

function Header() {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          &nbsp;Sign In
        </a>
      </div>
    </nav>
  )
}

export default Header
