const product = require('./product');
const category = require('./category');
const role = require('./role');
const user = require('./user');
const model = {};

model.category = category;
model.product = product;
model.user = user;
model.role = role;
module.exports = model;