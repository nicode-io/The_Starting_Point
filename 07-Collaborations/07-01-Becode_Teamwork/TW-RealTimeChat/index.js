const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const bodyParser  = require("body-parser");
const session = require('express-session');
const mongoose = require('mongoose');
const io = require('socket.io')(http);
var exphbs  = require('express-handlebars');
const PORT = 3000;
const curDir = __dirname;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'ssshhhhh'}));
mongoose.connect('mongodb+srv://mohamed:mkahms@cluster0.cz5k7.mongodb.net/chat-app?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
const hbs = exphbs.create({
    helpers: {
        if_eq : function(a, b, opts) {
            if (a == b) {
                console.log(a + " == " + b);
                return opts.fn(this);
            } else {
                console.log(a + " != " + b);
                return opts.inverse(this);
            }
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + '/'));
app.use(session({
    secret: '123key123',
    resave: false,
    saveUninitialized: false
}));
db.once('open', () => {
    console.log('Connected to mongodb');
});

db.on('error', function(err) {
    console.log(err);
});


require('./models/User');
require('./models/Chatmessage');
require('./routes/users')(app, curDir, db, io, session);


http.listen(PORT, () => {
    console.log('server listening on port ' + PORT);
}); 