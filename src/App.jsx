import './App.css';
import NavBar from './complementos/NavBar';
import ItemListContainer from './complementos/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductosGeneral from './complementos/ProductosGeneral';
import Producto from './complementos/Producto';
import CartContextProvider from './complementos/context/CartContext';
import Cart from './complementos/Cart';






function App() {
  return (
    <CartContextProvider>
          <div>
        <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path={"/"} element={<ItemListContainer/>} />
      <Route path={"/categoria/:idCategoria"} element={<ItemListContainer/>} />
      <Route path={"/item/:id"} element={<ProductosGeneral/>} />
      <Route path={"/cart"} element={<Cart/>} />
    </Routes>
  
  </BrowserRouter>

    </div>
    </CartContextProvider>
  );
}

export default App;
