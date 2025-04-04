'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Clinic.init({
    nameVi: DataTypes.STRING,
    nameEn: DataTypes.STRING,
    addressVi: DataTypes.STRING,
    addressEn: DataTypes.STRING,
    descriptionHTMLVi: DataTypes.TEXT,
    descriptionHTMLEn: DataTypes.TEXT,
    descriptionMarkdownVi: DataTypes.TEXT,
    descriptionMarkdownEn: DataTypes.TEXT,
    image: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Clinic',
  });
  return Clinic;
};