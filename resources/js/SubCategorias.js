import { useParams } from "react-router-dom";

function Subcategorias() {
  const { categoriaId } = useParams();
  const subcategorias = [
    { id: 1, categoriaId: 1, nombre: "Móviles" },
    { id: 2, categoriaId: 1, nombre: "Computadoras" },
    { id: 3, categoriaId: 2, nombre: "Camisas" }
  ];

  const subcategoriasFiltradas = subcategorias.filter(
    subcategoria => subcategoria.categoriaId === parseInt(categoriaId)
  );

  return (
    <div>
      <h1>Subcategorías</h1>
      <div className="cards-container">
        {subcategoriasFiltradas.map(subcategoria => (
          <Link to={`/productos/${subcategoria.id}`} key={subcategoria.id}>
            <div className="card">
              <h2>{subcategoria.nombre}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Subcategorias;