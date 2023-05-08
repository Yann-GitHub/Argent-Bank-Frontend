import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Error from "./pages/Error"
import Home from "./pages/Home"
import User from "./pages/User"
import SharedLayout from "./pages/SharedLayout"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
