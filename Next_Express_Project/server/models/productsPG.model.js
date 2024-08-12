
const { DataTypes } = require('sequelize')
const sequelize = require('../config/pgdb')

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: 'products',
    timestamps: false,
});

module.exports = Product;
