const model = require('../config/model/index');
const controller = {};
const { Op } = require('sequelize');
const db = require('../config/database/mysql');

controller.getAll = async function(req, res) {
    try {
        // let product = await model.product.findAll({
        //     attributes: [['id', 'idProduct'], ['name', 'nameProduct'], ['category_id', 'kodecategory'], ['stock', 'stock']],
        //     include: [
        //         { model: model.category }
        //     ]
        // })
        let product = await db.query('SELECT products.id as idProduct, products.name as nameProduct, category.category as nameCategory, products.stock as stockProduct, products.image as images  FROM products JOIN category ON products.category_id = category.category_id ORDER BY products.id ASC')
        if(product.length > 0) {
            res.status(200).json({
                message: 'get method product',
                data: product
            })
        }else{
            res.status(200).json({
                message: 'tidak ada data',
                data: []
            })
        }
    } catch (error){
        res.status(404).json({
            message: error.message
        })
    }
}

controller.getSearch = async function(req, res) {
    const search = req.query.keyword;
    try {
        let product = await model.product.findAll({
            attributes: [['id', 'idProduct'], ['name', 'nameProduct'], ['category_id', 'idCategory'], ['stock', 'stock']],
            where: {
                [Op.or]: [{
                    id: {
                        [Op.like]: '%' +search+ '%'
                    }
                },{
                    name: {
                        [Op.like]: '%' +search+ '%'
                    }
                }]
            }
        })
        if(product.length > 0) {
            res.status(200).json({
                message: 'get method product by id',
                data: product
            })
        }else{
            res.status(200).json({
                message: 'tidak ada data',
                data: []
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

controller.getOne = async function(req, res) {
    try {
        let product = await model.product.findAll({
            where: {
                id: req.params.id
            }
        })
        if(product.length > 0) {
            res.status(200).json({
                message: 'get method product by searchs',
                data: product
            })
        }else{
            res.status(200).json({
                message: 'tidak ada data',
                data: []
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

controller.post = async function(req, res) {
    // console.log(req.file)
    try {
        let product = await model.product.create({
            id: req.body.id,
            name: req.body.name,
            category_id: req.body.category_id,
            stock: req.body.stock,
            image: req.file.path
        })
        res.status(201).json({
            message: 'Menambahkan product',
            data: product
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

controller.put = async function(req, res) {
    try {
        let product = await model.product.update({
            name: req.body.name,
            category_id: req.body.category_id,
            stock: req.body.stock,
            image: req.file.path
        },{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: 'Mengubah product',
            data: product
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

controller.delete = async function(req, res) {
    try {
        let product = await model.product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: 'Menghapus product',
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = controller;