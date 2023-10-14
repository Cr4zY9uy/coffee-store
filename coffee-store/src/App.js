import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layouts/header';
import Navbars from './components/layouts/navbar';
import { Routes } from 'react-router-dom';
import Search from './components/pages/search';
import Account from './components/pages/account';
import Home from './components/pages/home';
import Favourite from './components/pages/favourite';
import Login from './components/pages/login';
import Register from './components/pages/register';
import Product from './components/pages/product';
import Cart from './components/pages/cart';
import Category_detail from './components/pages/category_detail';
import Slider from './components/layouts/slider';
import Brand from './components/layouts/brand';
import Product_grid from './components/layouts/product_grid';
import Purchasing_policies from './components/layouts/puchasing_policies';
import Footer from './components/layouts/footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Navbars />
      <Slider />
      <Brand />
      <Product_grid />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:slug' element={<Category_detail />} />
            <Route path='/products/:slug' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/sign-up' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/favourite' element={<Favourite />} />
            <Route path='/search' element={<Search />} />
            <Route path='/account' element={<Account />} />
          </Routes>
          <Purchasing_policies />
          <Footer />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
