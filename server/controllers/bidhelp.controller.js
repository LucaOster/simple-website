require('dotenv').config()
var Bidhelp = require('../models/bidhelp.model');

async function getBid(req, res) {
    res.json(await Bidhelp.find());
}

async function addBid(req, res) {
    const title = req.body.title;
    const bid = req.body.bid;
    console.log("Add Bid!")
    Bidhelp.findOne({ title: title }, (err, user) => {
        if(user) {
            res.send({ message: "It is already added!"});
        } else {
            const user = new Bidhelp({
                title,
                bid
            });
            console.log(user);
            user.save((err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({ message: "It has been added!"});
                }
            })
        }
    });
}

module.exports = { getBid, addBid };