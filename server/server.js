const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
//app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
    "mongodb://127.0.0.1:27017/sproutDB",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("DB connected");
    }
);

require('./routers/index.router')(app);

app.listen(5000, () => {
    console.log("Server starting at 5000");
});