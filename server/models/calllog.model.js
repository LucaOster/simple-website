const { text } = require('express');
const mongoose = require('mongoose');

const calllogs = new mongoose.Schema({
  title: String,
  content: String
});

module.exports = mongoose.model('calllogs', calllogs);