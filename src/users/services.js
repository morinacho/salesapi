const {ObjectId}      = require('mongodb')
const {Database}      = require('../database/index')
const COLLECTION      = 'users'

const getAll = async () => {
    const collection = await Database(COLLECTION)
    return await collection.find({}).toArray()
}

const getById = async (id) => {
    const collection = await Database(COLLECTION)
    return await collection.findOne({_id: ObjectId(id)})
}

const create = async (user) =>{
    const collection = await Database(COLLECTION)
    let result = await collection.insertOne(user)
    return result.insertedId
}

const update = async (user) => {
    const collection = await Database(COLLECTION)
    const option = {upset: false}
    let result = await collection.updateOne({_id: ObjectId(user.id)}, {$set: task.body}, option)
    return result
}

const deleteUser = async (id) => {
    const collection = await Database(COLLECTION)
    let result = await collection.deleteOne({_id: ObjectId(id)})
    return result
}

module.exports.UsersService = {
    getAll,
    getById,
    create,
    update,
    deleteUser
}