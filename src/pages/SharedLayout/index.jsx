import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function SharedLayout() {
  return (
    <div className="sharedlayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SharedLayout
