const {Sequelize}=require("sequelize")

const database='product_test';
const username= 'postgres';
const password= 'soyhenry'


const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect:'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    //port:3006
  });


  async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
testConnection();