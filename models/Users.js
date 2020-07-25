const {DataTypes}  =require('sequelize')
const db = require('../db')
const Upload =require('./Upload')
let User= db.define(
    'users',
    {
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        }
    },
    {
        // timestamps: false
    }
)
User.hasMany(Upload)
Upload.belongsTo(User)


module.exports = User;