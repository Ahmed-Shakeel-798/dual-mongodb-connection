const { default: mongoose } = require("mongoose");
const {connection1} = require("./db");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
    },
    age: {
        type: Number,
        default: 0,
    },
});

const User = connection1.model('User', userSchema);

module.exports = User;