import { useParams } from "react-router-dom";

function Productos() {
  const { subcategoriaId } = useParams();
  const productos = [
    { id: 1, subcategoriaId: 1, nombre: "iPhone 12" },
    { id: 2, subcategoriaId: 1, nombre: "Samsung Galaxy" }
  ];

  const productosFiltrados = productos.filter(
    producto => producto.subcategoriaId === parseInt(subcategoriaId)
  );

  return (
    <div>
      <h1>Productos</h1>
      <div className="products-container">
        {productosFiltrados.map(producto => (
          <Link to={`/producto/${producto.id}`} key={producto.id}>
            <div className="product-card">
              <h2>{producto.nombre}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Productos;