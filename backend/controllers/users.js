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
exports.getSessionUser = (req, res)=>{
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user});
    }else{
        res.send({loggedIn: false});
    }
}

exports.getUser = async (req, res) => {
    const email = req.params.email;

    try {
        await User.findOne({email: email},(err, doc)=>{
            if(err) throw err;
            console.log(doc);
            console.log(email);
            console.log(req.body);
            if(!doc){
                console.log('The user is not register');
            }else{
                
                bcrypt.compare(req.body.password, doc.password, function(err, result) {
                    if(result){
                    console.log('you are logged in as ' + doc.lastname);
                    req.session.user = doc;
                    console.log(req.session.user);
                    res.json(doc);
                    }else if(err){
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

exports.postEditUser = (req, res) => {
    // A GERE UNIQUEMENT ADMIN AURA DROIT
    const userId = req.body.petId;
    const { firstname, lastname, email, company } = req.body;

    User.findById(userId)
        .then((user) => {
            user.firstname = firstname;
            user.lastname = lastname;
            user.email = email;
            user.company = company;

            return user.save();
        })
        .then(() => {
            console.log('User Updated');
            // définir le comportement de l'app en cas de réussite
        })
        .catch((err) => {
            console.log(err);
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