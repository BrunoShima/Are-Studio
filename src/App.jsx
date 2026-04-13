import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Magazine from './pages/Magazine'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/about"          element={<About />} />
        <Route path="/magazine"       element={<Magazine />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
