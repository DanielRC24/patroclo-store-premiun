import './bootstrap';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categorias from "./pages/Categorias";
import Subcategorias from "./pages/Subcategorias";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Categorias} />
        <Route exact path="/subcategorias/:categoriaId" component={Subcategorias} />
        <Route exact path="/productos/:subcategoriaId" component={Productos} />
        <Route exact path="/producto/:productoId" component={ProductoDetalle} />
      </Switch>
    </Router>
  );
}

export default App;


