import { Link } from "react-router-dom"

/**
 * Composant representing the user page.
 *
 * @return {JSX.Element} - The rendered user page.
 */

function User() {
  return (
    <main>
      <div className="user-content">
        User Page
        <Link to="/" className="user-content__link">
          link
        </Link>
      </div>
    </main>
  )
}

export default User
