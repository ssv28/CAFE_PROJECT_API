let TABLE = require('../Models/tables')


exports.tableCreate = async function (req, res, next) {
    try {
        let tableCreate = await TABLE.create(req.body)
        res.status(201).json({
            status: "success",
            message: "Table Create success",
            data: tableCreate
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.tableUpdate = async function (req, res, next) {
    try {
        let tableUpdate = await TABLE.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            status: "success",
            message: "Table updated success",
            data: tableUpdate
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.tableFind = async function (req, res, next) {
    try {

        let tableFind = await TABLE.find().populate("reservation")
        res.status(200).json({
            status: "success",
            message: "Table Found success",
            data: tableFind
        })

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.tableDelete = async function (req, res, next) {
    try {

        let findTable = await TABLE.findById(req.params.id)
        if (!findTable) {
          throw new Error("Table is Already Delete")
        }

        await TABLE.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success",
            message: "Table Delete success",
        })

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}