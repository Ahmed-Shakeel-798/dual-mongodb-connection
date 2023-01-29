const { default: mongoose } = require("mongoose");
const {connection2} =  require("./db");

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: Boolean,
        default: false
    },
});

const Task = connection2.model('Task', taskSchema);

module.exports = Task;