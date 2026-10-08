const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    subject : String,
    message : String,
});

module.exports = mongoose.model("feed",userSchema);