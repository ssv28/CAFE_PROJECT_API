let Review = require('../Models/reviews')

exports.ReviewCreate = async (req, res, next) => {
    try {
        let ReviewCreate = await Review.create(req.body)
        res.status(200).json({
            status: "Success",
            message: "Review Create SuccessFully!",
            data: ReviewCreate
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.allReview = async (req, res, next) => {
    try {
        let allReview = await Review.find().populate('client').populate('menuItem')
        res.status(200).json({
            status: "Success",
            message: "All Review SuccessFully!",
            data: allReview
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.updateReview = async (req, res, next) => {
    try {
        let updateReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            status: "Success",
            message: "Review Edit SuccessFully!",
            data: updateReview
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.deleteReview = async (req, res, next) => {
    try {
        let deleteReview = await Review.findById(req.params.id)
        if (!deleteReview) {
            throw new Error("This Review Already Deleted!!");
        }

        await Review.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Success",
            message: "Review Delete SuccessFully!",
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
