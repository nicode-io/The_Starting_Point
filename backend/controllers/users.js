const User = require('../models/User');

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
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId, (user) => user);
        req.session.user = user;
        console.log(req.session.user);
        res.json(user);
    } catch (error) {
        console.log(error);
        // notifier l'utilisateur d'une erreur, et définir un comportement pour l'app
    }
}

exports.postUser = (req, res) => {
    const { firstname, lastname, email, password, company } = req.body;

    try {
        const user = new User({ firstname: firstname, lastname: lastname, email: email, password: password, company: company });
        user.save();
        // définir le comportement de l'app en cas de réussite
    } catch (error) {
        console.log(error);
        // définir le comportement de l'app en cas d'erreur
    }
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