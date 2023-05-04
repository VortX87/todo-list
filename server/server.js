const app = require('./index');
const { sequelize } = require('./db');


app.listen(5000, () => {
  sequelize.sync({ force: false });
  console.log(`Server ready at http://localhost:5000`);
});