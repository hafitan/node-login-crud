const Sequelize = require('sequelize');
const db = require('../database/mysql');
const category = require('./category');

var product = db.define('products', 
{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    category_id: Sequelize.STRING,
    stock: Sequelize.STRING,
    image: Sequelize.STRING
},{
    freezeTableName: true,
    timestemps: false
});
product.hasOne(category, { foreignKey: 'category_id' });
product.belongsTo(category, { foreignKey: 'category_id' });
// product.removeAttribute('id');
module.exports = product;