module.exports = (sequelize, DataTypes) => {
    const Proveedor = sequelize.define("Proveedor", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    Proveedor.associate = function(models) {
      Proveedor.hasMany(models.Producto, { foreignKey: 'proveedorId' });
    };
  
    return Proveedor;
  };