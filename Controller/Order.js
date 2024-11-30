let Order = require("../Models/orders")

exports.orderCreate = async (req, res, next) => {
    try {
        let orderCreate = await Order.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Order created successfully!",
            data: orderCreate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.allOrder = async (req, res, next) => {

    try {
        let allOrder = await Order.find().populate('client').populate('item')
        res.status(200).json({
            status: "Success",
            message: "All Order Found!",
            data: allOrder
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message,
        })
    }
}

exports.orderDelete = async (req, res, next) => {
    try {
        let orderFind = await Order.findById(req.params.id)

        if (!orderFind) {
            throw new Error("This Order Has Already Deleted!")
        }

        await Order.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: 'Success',
            message: "Order Successfully Delete"
        })

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.orderUpdate = async (req, res, next) => {
    try {
        let orderUpdate = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            status: 'Success',
            message: 'Order Successfully Edited!',
            data: orderUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}