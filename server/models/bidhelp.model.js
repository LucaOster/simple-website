const mongoose = require('mongoose');

const bidhelpchema = new mongoose.Schema({
    title: String,
    bid: String
});

module.exports = mongoose.model('bidhelp', bidhelpchema);