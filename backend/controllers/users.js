const User = require('../models/User');

exports.getAllUser = (req, res) => {

}
exports.getUser = (req, res) => {
    const userId = req.params.userId;

    const user = await User.findById(userId, (user) => user);

    try {
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}
exports.postUser = (req, res) => {
    const { firstname, lastname, email } = req.body;

    const user = new User({ firstname: firstname, lastname: lastname, email: email });
    user.save();
    
    res.status(201).redirect('/');
}
exports.getEditUser = (req, res) => {
    // A GERE UNIQUEMENT ADMIN AURA DROIT
}
exports.postEditUser = (req, res) => {
    // A GERE UNIQUEMENT ADMIN AURA DROIT
}
exports.deleteUser = (req, res) => {
    // A GERE UNIQUEMENT ADMIN AURA DROIT
}