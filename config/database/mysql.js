var Sequelize = require('sequelize');
var db = new Sequelize('exam_node', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = db;