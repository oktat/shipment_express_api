import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Shipment = sequelize.define('shipment', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    shipmentId : { type: DataTypes.STRING,  allowNull: false, unique: true },
    sentDate: { type: DataTypes.DATE,  allowNull: true },
    endDate: { type: DataTypes.DATE,  allowNull: true },
    addressee: { type: DataTypes.STRING,  allowNull: false },
    targetCity : { type: DataTypes.STRING,  allowNull: true }    
})

sequelize.sync({
    force: false
})

export default Shipment
