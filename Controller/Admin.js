var ADMIN = require('../Models/admins')
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

        let AdminVerify = await ADMIN.findById(verify.id)
        if (!AdminVerify) {
            throw new Error("Admin Not Found")
        }
        next()

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.adminSignup = async function (req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        let AdminData = await ADMIN.create(req.body)
        res.status(201).json({
            status: "success",
            message: "Admin Create success",
            data: AdminData
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.adminLogin = async function (req, res, next) {
    try {
        let AdminData = await ADMIN.findOne({ email: req.body.email })
        if (!AdminData) {
            throw new Error("Admin Not Found")
        }
        let AdminPassword = await bcrypt.compare(req.body.password, AdminData.password)
        if (!AdminPassword) {
            throw new Error("Password Invalid")
        }
        let token = jwt.sign({ id: AdminData._id }, 'CAFE')

        res.status(200).json({
            status: "success",
            message: "Admin login success",
            data: AdminData,
            token
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.adminUpdate = async function (req, res, next) {
    try {
        let adminUpdate = await ADMIN.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            status: "success",
            message: "Admin updated success",
            data: adminUpdate
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}


exports.adminFind = async function (req, res, next) {
    try {

        let adminFind = await ADMIN.find()
        res.status(200).json({
            status: "success",
            message: "Admin Found success",
            data: adminFind
        })

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.adminDelete = async function (req, res, next) {
    try {

        let findAdmin = await ADMIN.findById(req.params.id)
        if (!findAdmin) {
          throw new Error("Admin is Already Delete")
        }

        await ADMIN.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success",
            message: "Admin Delete success",
        })

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}