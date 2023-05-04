const {sequelize} = require('./db');
const {Todo} = require('./Todo');
const {todos} = require('./seedData');

const seed = async () => {
  await sequelize.sync({ force: true }); // recreate db
  await Todo.bulkCreate(todos);
};

module.exports = seed;
