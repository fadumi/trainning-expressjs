const Todo = require('../models/Todo');

exports.addTodo = async (req, res) => {
    try {
            const { name, done } = req.body;
            const data = await Todo.create({ name, done });
            res.json(data);
    } catch (err) {
        console.log('error' + err);
        res.status(500).send(err);
    }
}