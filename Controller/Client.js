var Client = require('../Models/clients')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

exports.Sequre = async function (req, res, next) {
    try {
        let token = req.headers.authorization
        if (!token) {
            throw new Error("Please Attech token")
        }

        let verify = jwt.verify(token, "CAFE")

        console.log(verify);

        let ClientVerify = await Client.findById(verify.id)
        if (!ClientVerify) {
            throw new Error("Client Not Found")
        }
        next()

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.ClientSignup = async function (req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        let ClientData = await Client.create(req.body)
        res.status(201).json({
            status: "success",
            message: "Client Create success",
            data: ClientData
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.ClientLogin = async function (req, res, next) {
    try {
        let ClientData = await Client.findOne({ email: req.body.email })
        if (!ClientData) {
            throw new Error("Client Not Found")
        }
        let ClientPassword = await bcrypt.compare(req.body.password, ClientData.password)
        if (!ClientPassword) {
            throw new Error("Password Invalid")
        }
        let token = jwt.sign({ id: ClientData._id }, 'CAFE')

        res.status(200).json({
            status: "success",
            message: "Client login success",
            data: ClientData,
            token
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.ClientUpdate = async function (req, res, next) {
    try {
        let ClientUpdate = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            status: "success",
            message: "Client updated success",
            data: ClientUpdate
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.ClientFind = async function (req, res, next) {
    try {

        let ClientFind = await Client.find()
        res.status(200).json({
            status: "success",
            message: "Client Found success",
            data: ClientFind
        })

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.ClientDelete = async function (req, res, next) {
    try {

        let findClient = await Client.findById(req.params.id)
        if (!findClient) {
          throw new Error("Client is Already Delete")
        }

        await Client.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success",
            message: "Client Delete success",
        })

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}