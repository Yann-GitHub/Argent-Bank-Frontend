import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

/**
 * React component that renders a shared layout for all pages with a header, a footer,
 * and an outlet where nested child routes can be rendered.
 *
 * @return {JSX.Element} - The rendered shared layout.
 */

// function SharedLayout() {
//   return (
//     <div className="sharedlayout">
//       <Header />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   )
// }

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
