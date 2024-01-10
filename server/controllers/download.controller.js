require('dotenv').config()
var config = require('../config');

function download(req, res) {
  const {path} = req.params;
  const file = `${__dirname}/../public/files/${path}`;
  var name = req.query.name;
  // if (name)
  //   name = name.replace(' ', '_');
  res.download(file, name);
}

module.exports = { download };