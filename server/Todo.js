const {Sequelize, sequelize} = require ('./db');

const Todo = sequelize.define('todo', {
    action: Sequelize.STRING,
    isCompleted:{
        type: Sequelize.STRING,
        defaultValue: false
    }
});

module.exports = { Todo };