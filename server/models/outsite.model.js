const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
    title: String,
    url: String
});

module.exports = mongoose.model('Outsites', siteSchema);