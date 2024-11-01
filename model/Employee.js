const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/db.config");

class Employee extends Model {}

Employee.init(
  {
    emp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
    },
    sex: {
      type: DataTypes.ENUM,
      values: ["M", "F"],
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      defaultValue: 100000,
    },
    super_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    modelName: "Employee",
    tableName: "employee",
    sequelize,
    timestamps: false,
  }
);

module.exports = Employee;
