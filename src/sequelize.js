import Sequelize from 'sequelize'
import { development as dbConfig } from './config/sequelize'

const connection = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect
  }
)

connection.authenticate()
  .then(() => {
    console.log('MYSQL Connection done')
  }).catch(error => console.log(error))

export default connection
