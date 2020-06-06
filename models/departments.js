module.exports = (sequelize, DataTypes) => {
    const departments = sequelize.define("departments", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    departments.associate = (models) => {
        // associations can be defined here
        models.departments.hasMany(models.employees, { foreignKey: 'departmentID' });
      };
    
    return departments;
  };