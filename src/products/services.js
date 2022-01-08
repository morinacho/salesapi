const {Database} = require('../database/index')
const {ObjectId} = require('mongodb')
const COLLECTION = 'products'

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
    let result = await collection.inhsertOne(product)
    return result.insertedId
}
module.exports.ProductsService = {
    getAll,
    getById,
    create
}