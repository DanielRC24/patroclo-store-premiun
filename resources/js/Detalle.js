import { useParams } from "react-router-dom";

function ProductoDetalle() {
  const { productoId } = useParams();
  const productos = [
    { id: 1, nombre: "iPhone 12", descripcion: "Descripción del iPhone 12" },
    { id: 2, nombre: "Samsung Galaxy", descripcion: "Descripción del Galaxy" }
  ];

  const producto = productos.find(p => p.id === parseInt(productoId));

  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
    </div>
  );
}

export default ProductoDetalle;