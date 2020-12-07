const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const MongoStore = require("connect-mongo")(session);
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes/routes');

const database = "mongodb+srv://username:123password@cluster0.2sv4t.gcp.mongodb.net/fabulab?retryWrites=true&w=majority";
// Then pass them to cors:

app.use(cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: "teamworkfablabproject2020",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 60000 },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: (30 * 60000 ) / 1000
      })
}));

app.use('/', routes);

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