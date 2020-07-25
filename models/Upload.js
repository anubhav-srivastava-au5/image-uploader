const { DataTypes } = require("sequelize");
const db = require('../db')

let Upload = db.define("uploads", {
    title:
    {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: DataTypes.TEXT,
    image_url: DataTypes.STRING

}, {
    timestamps: false
})

module.exports = Upload;