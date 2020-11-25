const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes/routes');

// Then pass them to cors:

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    key: "userInfo",
    secret: "teamworkfablabproject2020",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1000 * 60 * 60 * 24 ,
    }
}));
app.use('/', routes);

const database = "mongodb+srv://username:123password@cluster0.2sv4t.gcp.mongodb.net/fabulab?retryWrites=true&w=majority";

const port = process.env.PORT || 8080;

mongoose
    .connect(database, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(() => {
        app.listen(port, () => console.log(`Server and Database running on ${port}, http://localhost:${port}`));
    })
    .catch((err) => {
        console.log(err);
    });