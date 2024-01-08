const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
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

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const reportsSchema = new mongoose.Schema({
    name: String,
    report: String,
    time: String
});

const User = new mongoose.model("User", userSchema);
const Reports = new mongoose.model("Reports", reportsSchema);

//Routes
app.post("/login", (req, res) => {
    const email = req.body.user.username;
    const password = req.body.user.password;
    //check email
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                const token = jwt.sign(
                    {
                        userEmail: user.email,
                    },
                    "KSR",
                    { expiresIn: "12h" }
                );
                res.send({ message: "Login successfully", user: user, token: "Anaconda " + token});

            }
            else {
                res.send({ message: "Email or Password is Wrong!!!" });
            }
        } else {
            res.send({ message: "Email or Password is Wrong!!!" });
        }
    });
});

app.post("/signup", (req, res) => {
    const name = req.body.user.username;
    const email = req.body.user.email;
    const password = req.body.user.password;
    //check email
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User is already registerd" });
        } else {
            const user = new User({
                name,
                email,
                password
            });
            console.log(user);
            user.save((err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({ message: "Account has been created!! Please Login" });
                }
            });
        }
    });
    // res.send("register");
    //   console.log(req.body);
});
app.post("/auth", (req, res) => {
    const token = req.body.token;
    const decodedToken = jwt.verify(
        token.split(" ")[1],
        "KSR"
    );
    User.findOne({ email: decodedToken.userEmail }, (err, user) => {
        if (user) {
            res.send({message: "success_auth"});
        } else {
            res.send({message: "invalid"});
        }
    });
});
app.post("/report", (req, res) => {
     const name = req.body.reports.name;
     const report = req.body.reports.report;
     const time = new Date();
    // //check email
    
         const reports = new Reports({
             name,
             report,
             time
         });
    //     console.log(reports);
         reports.save((err) => {
             if (err) {
                 res.send(err);
             } else {
                 res.send({ message: "Your report was submited successfully!" });
             }
         });
    
    
    // res.send("register");
    //   console.log(req.body);
});
app.listen(5000, () => {
    console.log("Server starting at 5000");
});