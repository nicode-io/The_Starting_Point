const Reservation = require('../models/Reservation');

exports.getAllReservation = async(req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    }catch(error){
        console.log(error);
    }
}
exports.getReservation = async(req, res) => {
    const reservationId = req.params.reservationId;
    try{
        const reservation = await Reservation.findById(reservationId, (reservation) => reservation);
        res.json(reservation);
    }catch(error){
        console.log(error);
    }
}
exports.postReservation = async(req, res) => {
    const {name , usernotlogged , userlogged , startdate , enddate} = req.body;
    try{
        const reservation = new Reservation({name:name, usernotlogged:usernotlogged , userlogged:userlogged , startdate:startdate , enddate:enddate});
        reservation.save();
    }catch(error) {
        console.log(error);
    }
}
exports.getEditReservation = async(req, res) => {
    // A GERE UNIQUEMENT ADMIN AURA DROIT
}
exports.postEditReservation = async(req, res) => {
    const reservationId = req.body.reservationId;
    const {name,usernotlogged,userlogged,startdate,enddate} = req.body;

    Reservation.findById(reservationId).then((reservation) => {
        reservation.name = name;
        reservation.usernotlogged = usernotlogged;
        reservation.userlogged = userlogged;
        reservation.startdate = startdate;
        reservation.enddate = enddate;

        return reservation.save()
    }).then(() =>{
        console.log('Reservation Updated');
    }).catch((error) =>{
        console.log(error);
    });
}
exports.deleteReservation = async(req, res) => {
    const reservationId = req.body.reservationId;

    try {
        const reservation = await Reservation.findByIdAndDelete(reservationId, (reservation) => reservation);
        console.log(reservation + 'This reservation has been deleted');
    }catch(error) {
        console.log(error);
    }
}