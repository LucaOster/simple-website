require('dotenv').config()

const { now } = require('mongoose');
const Reports = require('../models/report.model.js');

/* Declare getAll url method=get  */
async function getAll(req, res) {
  // res.json([
  //   { id: 0, name: 'Intel', age: 26},
  //   { id: 1, name: 'Kimmy', age: 26},
  //   { id: 2, name: 'LionKing', age: 18},
  // ])
  res.json(await News.find({}));
}

/** Declare saveNews url method=post */

async  function saveReport(req, res) {
  const name = req.body.reports.name;
  const report = req.body.reports.report;
  const opinion = req.body.reports.opinion;
  const time = Date().slice(4, 15);

  const reports = new Reports({
    name,
    report,
    opinion,
    time
  });
  reports.save((err) => {
    if (err) {
        res.send(err);
    } else {
        res.send({ message: "Your report was submited successfully!" });
    }

  });
}


module.exports = { getAll, saveReport };