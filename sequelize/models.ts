import { DataTypes } from 'sequelize';
import sequelize from '../src/config/sequelize';

const user = sequelize.define(
    'user',{
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

console.log(user === sequelize.models.User); // true

