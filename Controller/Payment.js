let Payment = require('../Models/payments')

exports.createPayment = async (req, res, next) => {
    try {
        let createPayment = await Payment.create(req.body)
        res.status(200).json({
            status: 'Success',
            message: 'Payment Create Done!',
            data: createPayment
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.allPayment = async (req, res, next) => {
    try {
        let allPayment = await Payment.find().populate('order')
        res.status(200).json({
            status: 'Success',
            message: 'All Payment Found!',
            data: allPayment
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.deletePayment = async (req, res, next) => {
    try {

        let paymentFind = await Payment.findById(req.params.id)

        if (!paymentFind) {
            throw new Error("This Payment Already Deleted!");
        }

        await Payment.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: 'Success',
            message: 'Payment Delete Successfully!',
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.updatePayment = async (req, res, next) => {
    try {
        let updatePayment = await Payment.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({
            status: 'Success',
            message: 'Payment Edited SuccessFull!',
            data: updatePayment
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        })
    }
}