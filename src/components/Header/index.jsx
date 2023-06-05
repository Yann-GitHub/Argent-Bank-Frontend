import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import Logo from "../../assets/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

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
        <Link to="/signin" className="main-nav-item">
          {/* <i className="fa fa-user-circle"></i> */}
          <FontAwesomeIcon icon={faUserCircle} />
          &nbsp;Sign In
        </Link>
      </div>
    </nav>
  )
}

export default Header
