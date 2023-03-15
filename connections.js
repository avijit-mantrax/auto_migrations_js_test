const {Sequelize} = require("sequelize");
const {DB_URI} = require("./config")

 const sequelize = new Sequelize(DB_URI, { 
    dialect: "postgres",
    logging: false,
    dialectOptions: {
        ssl: false,
      },
});

const DBInit = async () => {
    try {
        sequelize.sync({alert: true});
        await sequelize.authenticate();
        console.log("Database Initialize successfully !");
    } catch (error) {
        console.log(error);
    }
}


module.exports = {DBInit, sequelize}