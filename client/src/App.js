import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Shop from './Pages/Shop';
import Tulips from './Pages/Tulips';
import MixedBouquet from './Pages/MixedBouquet';
import CartProvider from './cartContext';

import RootLayout from './layouts/RootLayout';
import Error404 from './Pages/Error/Error404';
import Basket from './Pages/Basket';
import Success from './Pages/Success';
import Cancel from './Pages/Cancel';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<Error404 />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='tulips' element={<Tulips />} />
        <Route path='mixed' element={<MixedBouquet />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='basket' element={<Basket />} />
        <Route path='success' element={<Success />} />
        <Route path='cancel' element={<Cancel />} />
        
    </Route>
  )
)

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  );
}

export default App;


  // const scrollContact = () => {
  //   setTimeout(() => {
  //     const anchor = document.querySelector('#contact-anchor')
  //     const y = anchor.getBoundingClientRect().top + window.scrollY
  //     window.scrollTo({top: y, behavior:'smooth'})
  //   }, 100)
  // }
