module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define("Producto", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subcategoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  
    Producto.associate = function(models) {
      Producto.belongsTo(models.Marca, { foreignKey: 'marcaId' });
      Producto.belongsTo(models.Proveedor, { foreignKey: 'proveedorId' });
      Producto.hasMany(models.Imagen, { foreignKey: 'productoId' });
    };
  
    return Producto;
  };