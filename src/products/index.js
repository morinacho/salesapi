const express = require('express')
const router  = express.Router()
const {ProductsController} = require('./controller')

module.exports.ProductsAPI = (app) => {
    router
        .get('/', ProductsController.getProducts)
        .get('/report', ProductsController.generateReport)
        .get('/:id', ProductsController.getProduct)
        .post('/', ProductsController.createProduct)
    app.use('/api/products', router)
}