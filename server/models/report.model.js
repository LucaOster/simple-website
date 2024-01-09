const { text } = require('express');
const mongoose = require('mongoose');

const reportsSchema = new mongoose.Schema({
  name: String,
  report: String,
  opinion: String,
  time: String
});

module.exports = mongoose.model('Reports', reportsSchema);