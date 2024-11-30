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