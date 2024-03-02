import './App.css'
import AllProducts from './components/AllProducts'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Product from './components/Product'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} >
          <Route path='/' element={<HomePage />} exact />
          <Route path='/allproducts' element={<AllProducts />} exact />
          <Route path='/product/:id' element={<Product />} exact />
        </Route>
        <Route path='/cart' element={<Cart />} exact />
      </Routes>
      <Footer />

    </>
  )
}

export default App
