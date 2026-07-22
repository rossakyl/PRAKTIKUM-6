const db = require('../models');

async function connectToDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log('Connection connected successfully.');

    await db.sequelize.sync({ alter: true});
    console.log('Database synchronized successfully.');

    } catch (error) {
        console.error('Database connection failed:', error.message);    
        process.exit(1);
   }     
}

module.exports = connectToDatabase;