"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History.init(
    {
      patientId: DataTypes.STRING,
      doctorId: DataTypes.STRING,
      descriptionHTMLVi: DataTypes.TEXT,
      descriptionHTMLEn: DataTypes.TEXT,
      descriptionMarkdownVi: DataTypes.TEXT,
      descriptionMarkdownEn: DataTypes.TEXT,
      files: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
