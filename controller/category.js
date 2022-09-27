const category = require('../config/model/category');
const model = require('../config/model/index');
const controller = {};

controller.getAll = async function(req, res) {
    try {
        let category = await model.category.findAll()
        if(category.length > 0) {
            res.status(200).json({
                message: 'get method category',
                data: category
            })
        }else{
            res.status(200).json({
                message: 'tidak ada data',
                data: []
            })
        }
    } catch(error) {
        res.status(404).json({
            message: error
        })
    }
}

controller.getOne = async function(req, res) {
    try {
        let category = await model.category.findAll({
            where: {
                id: req.params.id
            }
        })
        if(category.length > 0) {
            res.status(200).json({
                message: 'get method category by id',
                data: category
            })
        }else{
            res.status(200).json({
                message: 'tidak ada data',
                data: []
            })
        }
    } catch (error) {
        res.statsu(404).json({
            message: error.message
        })
    }
}

controller.post = async function(req, res) {
    try {
        let category = await model.category.create({
            id: req.body.id,
            category: req.body.category,
        })
        res.status(201).json({
            message: 'Menambahkan category',
            data: category
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

controller.put = async function(req, res) {
    try {
        let category = await model.category.update({
            category: req.body.category,
        },{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: 'Mengubah category',
            data: category
        })
    } catch (error) {
        res.statsu(404).json({
            message: error.message
        })
    }
}

controller.delete = async function(req, res) {
    try {
        let category = await model.category.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: 'Menghapus category',
        })
    } catch (error) {
        res.statsu(404).json({
            message: error.message
        })
    }
}

module.exports = controller;