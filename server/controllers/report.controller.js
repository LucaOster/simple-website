require('dotenv').config()
const { now } = require('mongoose');
const Reports = require('../models/report.model.js');

async function getAll(req, res) {
  res.json(await News.find({}));
}

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