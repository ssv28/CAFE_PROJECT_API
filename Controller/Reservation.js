let Reservation = require('../Models/reservations')


exports.ReservationCreate = async function (req, res, next) {
    try {
        let ReservationCreate = await Reservation.create(req.body)
        res.status(201).json({
            status: "success",
            message: "Reservation Create success",
            data: ReservationCreate
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.ReservationUpdate = async function (req, res, next) {
    try {
        let ReservationUpdate = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            status: "success",
            message: "Reservation updated success",
            data: ReservationUpdate
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.ReservationFind = async function (req, res, next) {
    try {

        let ReservationFind = await Reservation.find().populate("client")
        res.status(200).json({
            status: "success",
            message: "Reservation Found success",
            data: ReservationFind
        })

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.ReservationDelete = async function (req, res, next) {
    try {

        let findReservation = await Reservation.findById(req.params.id)
        if (!findReservation) {
          throw new Error("Reservation is Already Delete")
        }

        await Reservation.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success",
            message: "Reservation Delete success",
        })

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}