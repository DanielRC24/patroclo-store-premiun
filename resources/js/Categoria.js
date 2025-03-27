import { Link } from "react-router-dom";

function Categorias() {
  const categorias = [
    { id: 1, nombre: "Electronica" },
    { id: 2, nombre: "Ropa" },
    { id: 3, nombre: "Casa" }
  ];

  return (
    <div>
      <h1>Categorías</h1>
      <div className="cards-container">
        {categorias.map(categoria => (
          <Link to={`/subcategorias/${categoria.id}`} key={categoria.id}>
            <div className="card">
              <h2>{categoria.nombre}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categorias;