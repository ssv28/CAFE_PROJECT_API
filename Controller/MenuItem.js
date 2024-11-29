let Menu = require('../Models/menuItems')

exports.menuAdd = async function (req, res, next) {
    try {
        let menuAdd = await Menu.create(req.body)
        res.status(201).json({
            status: "success",
            message: "MenuIem Successfully Added!",
            data: menuAdd

        })

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.menuFound = async function (req, res, next) {
    try {
        let allMenu = await Menu.find()
        res.status(200).json({
            status: "Success",
            message: "All Menu Founded!",
            data: allMenu
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.menuDelete = async (req, res, next) => {
    try {
        let findMenu = await Menu.findById(req.params.id)
        if (!findMenu){
            throw new Error ("Menu Item Allready Deleted!")
        }

        await Menu.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "success",
            message: "Menu Item Deleted Succesfully!",
        })
        
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.manuUpdate = async (req, res, next) => {
    try {
        let updateMenu = await Menu.findByIdAndUpdate(req.params.id)
        res.status(200).json ({
            status : "Success",
            message : "MenuItem Updated!",
            data : updateMenu
        })
    } catch (error) {
        res.status(404).json ({
            status : "Fail",
            message : error.message
        })
    }
}