module.exports = (sequelize, DataTypes) => {
    const Imagen = sequelize.define("Imagen", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  
    Imagen.associate = function(models) {
      Imagen.belongsTo(models.Producto, { foreignKey: 'productoId' });
    };
  
    return Imagen;
  };