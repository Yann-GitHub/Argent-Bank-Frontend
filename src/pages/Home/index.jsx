// import { Link } from "react-router-dom"
import HeroBanner from "../../components/HeroBanner"
import Features from "../../components/Features"

/**
 * Composant representing the home page.
 *
 * @return {JSX.Element} - The rendered home page.
 */

function Home() {
  return (
    <div className="home-content">
      <HeroBanner />
      <Features />
    </div>
  )
}

export default Home
