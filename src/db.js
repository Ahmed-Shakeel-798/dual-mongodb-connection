const mongoose = require('mongoose');

const uri1 = process.env.MONGODB_URL1;
const uri2 = process.env.MONGODB_URL2;

const connection1 = mongoose.createConnection(uri1);

const connection2 = mongoose.createConnection(uri2);

module.exports = {
    connection1,
    connection2
};