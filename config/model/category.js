const Sequelize = require('sequelize');
const db = require('../database/mysql');

var category = db.define('category', 
{
    category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    category: Sequelize.STRING
},{
    freezeTableName: true,
    timestemps: false
});

module.exports = category;