import { BrowserRouter, Routes, Route } from "react-router-dom"
import StyleguidePage from "./StyleguidePage"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StyleguidePage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App