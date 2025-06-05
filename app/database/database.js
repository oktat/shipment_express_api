import Sequelize from 'sequelize'
import config from '../../config/default.json' with { type: 'json' }

if(config.app.log != false) {
    var log = console.log
}

console.log(typeof console.log)
const sequelize = new Sequelize(
    config.db.name,
    config.db.user, 
    config.db.pass,
    {
        logging: log,
        dialect: config.db.dialect,
        storage: config.db.path,
        host: config.db.host,
        dialectOptions: {}
    }
)
 
export default sequelize