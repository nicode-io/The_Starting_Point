const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        // notifier l'utilisateur d'une erreur, et définir un comportement pour l'app
    }
}
// Method for the sessions
exports.getSessionUser = async (req, res, next)=>{
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user});
    }else{
        res.send({loggedIn: false});
    }
    next();
}
exports.destroySessionUser = async (req, res, next)=>{
req.session.destroy();
res.send({loggedIn: false});
    next();
}

exports.authUser = async (req, res) => {
    const email = req.params.email;
    try {
        await User.findOne({email: email},(err, doc)=>{
            if(err) throw err;
            if(!doc){
                res.status(403).json({
                    message: 'The user is not register.'
                });
                console.log('The user is not register.');
            }else{
                bcrypt.compare(req.body.password, doc.password, function(err, result) {
                    if(result){
                    console.log('you are logged in as ' + doc.lastname);
                    req.session.user = doc;
                    res.status(200).json(
                        {loggedIn: true,message: "Login Successfuly!" , user: req.session.user}
                    );
                    }else if(err){
                        res.status(403).json({
                            message: 'incorrect password.'
                        });
                        console.log('incorrect password ' + user.password);
                    }
                });

            }
        });

    } catch (error) {
        console.log(error);
        // notifier l'utilisateur d'une erreur, et définir un comportement pour l'app
    }
}
exports.getUserByID = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findOne({_id: id},(err, doc)=>{
            if(err) throw err;
            if(!doc){
                console.log('User not found');
                res.send({message: 'User not found!'})
            }else{
                console.log(req.doc);
                res.json(doc);
            }      
        });

    } catch (error) {
        console.log(error);
        // notifier l'utilisateur d'une erreur, et définir un comportement pour l'app
    }
}
exports.getUser = async (req, res) => {
    const email = req.params.email;

    try {
        await User.findOne({email: email},(err, doc)=>{
            if(err) throw err;
            if(!doc){
                console.log('User not found');
                res.send({message: 'User not found!'})
            }else{
                console.log(req.doc);
                res.json(doc);
            }      
        });

    } catch (error) {
        console.log(error);
        // notifier l'utilisateur d'une erreur, et définir un comportement pour l'app
    }
}

exports.postUser = (req, res) => {
    const { firstname, lastname, email, tel, password, company, reservation, invoice, usertype } = req.body;
    
   
        const user = new User({ firstname: firstname, lastname: lastname, email: email, tel: tel, password: password, company: company, reservation: reservation, invoice: invoice, usertype: usertype });
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                user.password = hash;
                
                try {
                    user.save();
                    // définir le comportement de l'app en cas de réussite
                } catch (error) {
                    console.log(error);
                    // définir le comportement de l'app en cas d'erreur
                }
            });
        });
}

// exports.getEditUser = (req, res) => {
//     // A GERE UNIQUEMENT ADMIN AURA DROIT
// }

exports.putEditUser = (req, res) => {
    // A GERE UNIQUEMENT ADMIN AURA DROIT
    const userId = req.body.id;
    
    const { firstname, lastname, email, tel, company, type } = req.body;
    User.findById(userId)
    .then((user) => {
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.tel = tel;
        user.company = company;
        user.usertype = type;
        
        
        user.save();
        })
        .then(() => {
            console.log('User Updated');
            
            // définir le comportement de l'app en cas de réussite
        })
        .catch((err) => {
            console.log("Error: " + err);
            // définir le comportement de l'app en cas d'erreur
        }); 
}

exports.postDeleteUser = async (req, res) => {
    // A GERE UNIQUEMENT ADMIN AURA DROIT
    const userId = req.body.userId;

    try {
        const user = await User.findByIdAndDelete(userId, (user) => user);
        console.log(user);
        console.log('User Deleted');
        // définir le comportement de l'app en cas de réussite
    } catch (error) {
        console.log(error);
        // définir le comportement de l'app en cas d'erreur
    }
}