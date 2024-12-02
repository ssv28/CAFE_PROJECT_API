let Discount = require('../Models/discounts')

exports.discountCreate = async (req, res, next) => {
    try {
        let discountCreate = await Discount.create(req.body)
        res.status(200).json({
            status: "Success",
            message: "Discount Create SuccessFully!",
            data: discountCreate
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.allDiscount = async (req, res, next) => {
    try {
        let allDiscount = await Discount.find()
        res.status(200).json({
            status: "Success",
            message: "All Discount SuccessFully!",
            data: allDiscount
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.updateDiscount = async (req, res, next) => {
    try {
        let updateDiscount = await Discount.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            status: "Success",
            message: "Discount Edit SuccessFully!",
            data: updateDiscount
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.deleteDiscount = async (req, res, next) => {
    try {
        let deleteDiscount = await Discount.findById(req.params.id)
        if (!deleteDiscount) {
            throw new Error("This Discount Already Deleted!!");
        }

        await Discount.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Success",
            message: "Discount Delete SuccessFully!",
            data: deleteDiscount
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}