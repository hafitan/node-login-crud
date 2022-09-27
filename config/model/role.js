const Sequelize = require('sequelize');
const db = require('../database/mysql');

var role = db.define('role', 
{
    role_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING
},{
    freezeTableName: true,
    timestemps: false
});

module.exports = role;