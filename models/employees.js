module.exports = (sequelize, DataTypes) => {
    const employees = sequelize.define("employees", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false
      },
      departmentID: {
        type: DataTypes.INTEGER,
        references: {
            model: 'departments',
            key: 'id',
        }
      }
    });
    employees.associate = (models) => {
        // associations can be defined here
        models.employees.belongsTo(models.departments, { foreignKey: 'departmentID' });
    };

    return employees;
  };