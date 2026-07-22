const db = require('../models');

async function connectToDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log('Connection connected successfully.');

    await db.sequelize.sync({ alter: true});
    console.log('Database synchronized successfully.');

    } catch (error) {
        
   }     
}

module.exports = connectToDatabase;