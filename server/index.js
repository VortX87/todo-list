const express = require('express');
const app = express();
const {Todo} = require("./Todo");
const cors = require('cors');

app.use(express.json())
app.use(cors())

app.get("/", async(req, res) => {
    const todos = await Todo.findAll();
    res.send(todos);
})

app.post("/", async(req,res) => {
    const { action } = req.body
    await Todo.create({action})
    res.json(200)
})

app.delete("/:id", async(req, res) => {
    const { id } = req.params;
    await Todo.destroy({
        where: {id}
    })
    res.send(`Deleted Todo ${id}`)
})

app.patch('/:id', async (req, res) => {
    const requestedId = req.params.id
    const todo = await Todo.findOne({ where: {id:requestedId}})
    todo.isCompleted = true;
    await todo.save();
    res.send(`Updated Todo`);
});

// we export the app, not listening in here, so that we can run tests
module.exports = app;