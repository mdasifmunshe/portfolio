import { Routes, Route } from 'react-router-dom'

import { About, Home } from "./pages"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default App