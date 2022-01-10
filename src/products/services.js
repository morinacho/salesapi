const {ObjectId}      = require('mongodb')
const {Database}      = require('../database/index')
const {ProductsUtils} = require('./utils')
const COLLECTION      = 'products'

const getAll = async () => {
    const collection = await Database(COLLECTION)
    return await collection.find({}).toArray()
}

const getById = async (id) => {
    const collection = await Database(COLLECTION)
    return await collection.findOne({_id: ObjectId(id)})
}

const create = async (product) =>{
    const collection = await Database(COLLECTION)
    let result = await collection.insertOne(product)
    return result.insertedId
}
const update = async (product) => {
    const collection = await Database(COLLECTION)
    const option = {upset: false}
    let result = await collection.updateOne({_id: ObjectId(product.id)}, {$set: task.body}, option)
    return result
}

const deleteProduct = async (id) => {
    const collection = await Database(COLLECTION)
    let result = await collection.deleteOne({_id: ObjectId(id)})
    return result
}
const generateReport = async (name, res) => {
    let products = await getAll()
    ProductsUtils.excelGenerator(products, name, res)
}
module.exports.ProductsService = {
    getAll,
    getById,
    create,
    update,
    deleteProduct,
    generateReport,
}