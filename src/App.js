import { BrowserRouter, Routes, Route } from "react-router-dom"
import StyleguidePage from "./StyleguidePage"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StyleguidePage />} />
      <Route path='/:name' element={<StyleguidePage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App