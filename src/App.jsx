import logo from './logo.svg';
import './App.css';
import Productos from './complementos/Productos';
import NavBar from './complementos/NavBar';
import ItemListContainer from './complementos/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar/> 
      <ItemListContainer greeting={"Las mejores pizzas del condado están en camino..."} /> 
      <Productos/>
    </div>

  );
}

export default App;
