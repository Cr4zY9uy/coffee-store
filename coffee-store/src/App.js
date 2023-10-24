import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/layouts/header';
import Navbars from './components/layouts/navbar';
import { Routes } from 'react-router-dom';
import Account from './components/pages/account';
import Home from './components/pages/home';
import Favourite from './components/pages/favourite';
import Login from './components/pages/login';
import Register from './components/pages/register';
import Products from './components/pages/products';
import Cart from './components/pages/cart';
import CategoryDetail from './components/pages/category_detail';
import Footer from './components/layouts/footer';
import Product from './components/pages/product';
import Orders from './components/pages/orders';
import OrdersDetail from './components/pages/orderetail';
function App() {
  return (
    <div className="App">
      <Header />
      <Navbars />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<CategoryDetail />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/account' element={<Account />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/orderdetail' element={<OrdersDetail />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
