const Sequelize = require('sequelize');
const db = require('../database/mysql');
const role = require('./role');

var user = db.define('users', 
{
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    role_id: Sequelize.STRING
},{
    freezeTableName: true,
    timestemps: false
});
user.hasOne(role, { foreignKey: 'role_id' });
user.belongsTo(role, { foreignKey: 'role_id' });
// product.removeAttribute('id');
module.exports = user;