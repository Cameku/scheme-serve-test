import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"

const Navigation = () => {
  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Navigation
