import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/user/Navbar/Navbar'
import Footer from './components/user/Footer/Footer'
import Home from './pages/user/Home'
import Cart from './pages/user/Cart'
import Product from './pages/user/Product'
import View from './pages/user/View'
import Order from './pages/user/Order'
import Wishlist from './pages/user/Wishlist'
import Contact from './pages/user/Contact'
import Login from './pages/user/Login'
import Signup from './pages/user/Signup'
import Dashboard from './pages/admin/Dashboard'


function App() {
  return (
    <div>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  )
}

function AppContent() {
  const location = useLocation();
  const adminPaths = ['/admin', '/admin/addProduct', '/admin/newOrder', '/admin/updateProduct', '/admin/cancelReq'];

  return (
    <>
     
      {!adminPaths.includes(location.pathname) && <Navbar />}
      
      <Routes>
        {/* User Routes */}
        <Route path='/' element={<Home/>}/>
        <Route path='/makeup' element={<Product category="makeup"/>}/>
        <Route path='/skincare' element={<Product category="skincare"/>}/>
        <Route path='/haircare' element={<Product category="haircare"/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/view/:productId' element={<View/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        {/* Admin Routes */}
        <Route path='/admin' element={<Dashboard panel="analysis"/>}>
          <Route path='addProduct' element={<Dashboard panel="addProduct"/>}/>
          <Route path='newOrder' element={<Dashboard panel="newOrder"/>}/>
          <Route path='updateProduct' element={<Dashboard panel="updateProduct"/>}/>
          <Route path='cancelReq' element={<Dashboard panel="cancelReq"/>}/>
        </Route>
      </Routes>

      
      {!adminPaths.includes(location.pathname) && <Footer />}
    </>
  )
}

export default App
