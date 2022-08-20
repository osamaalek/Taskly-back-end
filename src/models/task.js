const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    content: { type: String, required: true },
    completed: { type: Boolean, default: false},
    userId: { type: String, required: true }
});

const Task = mongoose.model("tasks", taskSchema);

module.exports = Task;