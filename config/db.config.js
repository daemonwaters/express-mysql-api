const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URI);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Success. Connected to Databse...");
  } catch (error) {
    console.error(error);
  }
};

const sync = async () => {
  await sequelize.sync();
};

module.exports = { sequelize, connect, sync };
