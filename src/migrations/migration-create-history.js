"use strict";

//const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("histories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      patientId: {
        type: Sequelize.STRING,
      },
      doctorId: {
        type: Sequelize.STRING,
      },
      descriptionHTMLVi: {
        type: Sequelize.STRING,
      },
      descriptionHTMLEn: {
        type: Sequelize.STRING,
      },
      descriptionMarkdownVi: {
        type: Sequelize.TEXT,
      },
      descriptionMarkdownEn: {
        type: Sequelize.TEXT,
      },
      files: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("histories");
  },
};
