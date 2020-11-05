const bcrypt = require('bcrypt');
let sess;
const saltRounds = 10;
module.exports = (app, dir, db, io, session)=>{
    let fullname;
    let listConnections = [];
    io.on('connection', (socket)=>{
        if(fullname != undefined){
            console.log('a user connected ' + fullname);
            
        }
        socket.on('chat message', (msg)=>{

            const chat = new Chatmessage();
            chat.room = 1;
            chat.user = msg.name;
            chat.date = new Date();
            chat.message = msg.message;
            console.log(chat);
            try {
            chat.save(function(err, doc) {
                if (err) return console.error(err);
            });
            } catch(err) {
                console.log(err);
            }
            console.log(msg.name + ' message: ' + msg.message);
        });
    });
    app.get("/", async (req, res) => {
        console.log('this is the list of connections : ' +  listConnections[0]);
        fullname = req.session.fullname;
        if(fullname){
            const collection = db.collection("chatmessages");
            const docs = await collection.find({}).toArray();

            console.log(docs);
            res.render('home', { fullname: fullname, data: docs, list: listConnections });
        }else{
            res.redirect('/login');
        }
    });
        
    app.get("/login", (req, res) => {
        res.sendFile(dir + '/login.html');
    });

    app.post("/login", async (req, res) => {
        const user = new User(req.body);
        sess = req.session;
        const collection = db.collection("users");
        await collection.findOne({'email':user.email},(err, doc)=>{
            if(err) throw err;
            console.log(doc);
            
            if(!doc){
                console.log('The user is not register');
                res.redirect('/login');
            }else{
                if(bcrypt.compareSync(user.password, doc.password)){
                    console.log('you are logged in as ' + doc.fullname);
                    
                        listConnections.push({'name': doc.fullname});
                    
                    sess.fullname = doc.fullname;
                    sess.email = doc.email;
                    res.redirect('/');
                    
                }else{
                    console.log('incorrect password ' + user.password);
                    res.redirect('/login');
                }
            }
        });
    });

    app.get("/register", (req, res) => {
        res.sendFile(dir + '/register.html');
    });

    app.post('/register', (req, res) => {
        
        const user = new User(req.body);

            bcrypt.genSalt(saltRounds,(err, salt)=>{
                bcrypt.hash(user.password, salt, (err, hash)=>{
                    user.password = hash;
                    try {
                        user.save();
                        res.redirect('/login');
                    } catch (err) {
                        console.log(err);
                        res.status(500).send(err);
                    }
                });
            });
    }); 

}