import { useParams } from "react-router-dom";

function ProductoDetalle() {
  const { productoId } = useParams();
  const productos = [
    { id: 1, nombre: " iPhone 15 Pro Max", descripcion: "Pantalla: 6.7 pulgadas OLED Super Retina XDR" },
    { id: 2, nombre: "Samsung Galaxy S23 Ultra", descripcion: "Procesador: Snapdragon 8 Gen 2" },
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