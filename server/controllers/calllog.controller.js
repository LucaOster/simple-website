require('dotenv').config()

const { now } = require('mongoose');
var calllogs = require('../models/calllog.model.js');

/* Declare getAll url method=get  */
async function getAllCallLog(req, res) {
  res.json(await calllogs.find({}));
}

/** Declare saveNews url method=post */

async function save(req, res) {

  const title = req.body.callLog.title;
  const content = req.body.callLog.content;
  const callLog = new calllogs({
      title,
      content
  });

    callLog.save((err) => {
      if (err) {
          res.send(err);
      } else {
          res.send({ message: "success!" });
      }
  });
}

module.exports = { getAllCallLog, save };