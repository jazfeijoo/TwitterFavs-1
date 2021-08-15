const db = require("./db");
const User = require("./User");



// User.hasMany(Order);
// Order.hasMany(OrderDetail);
// Flower.hasMany(OrderDetail);

module.exports = {
  db,
  models: {
    User
  },
};
