const {ProductsService}  = require('./services')
const debug = require('debug')('app:products module')

module.exports.ProductsController = {
    getProducts: async (req,res) => {
        try {
            let products = await ProductsService.getAll()
            res.json(products) 
        } catch (error) {
            debug(error)
            res.status(500).json({message: "Internal Error"})
        }
    },
    getProduct: async(req,res) => {
        try {
            const {params : {id}} = req
            let product = await ProductsService.getById(id)
            res.json(product)
        } catch (error) {
            debug(error)
            res.status(500).json({message: 'Internal server error'})
        }
    },
    createProduct:async (req,res) => {
        try {
            const {body} = req
            const insertId = await ProductsService.create(body)
            res.json(insertId)
        } catch (error) {
            debug(error)
            res.status(500).json({message: 'Internal server error create'})
        }
    }
}