const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Todo', todoSchema);