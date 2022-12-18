import './App.css';
import NavBar from './complementos/NavBar';
import ItemListContainer from './complementos/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductosGeneral from './complementos/ProductosGeneral';
import Producto from './complementos/Producto';







function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <ItemListContainer greeting={"Las mejores comidas del condado están en camino..."} /> 
      <Routes>
        <Route path={"/"} element={<ProductosGeneral/>} />
        <Route path={"/categoria/:idCategoria"} element={<ProductosGeneral/>} />
        <Route path={"/item/:id"} element={<Producto/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
