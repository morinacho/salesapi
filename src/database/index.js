const {MongoClient} = require('mongodb')
const {Config}      = require('../config/index')
const debug         = require('debug')('app:database')


let connection = null
module.exports.Database = (colletion) => new Promise( async (resolve, reject) => {
    try {
        if(!connection){
            const client = new MongoClient(Config.mongoUri)
            connection = await client.connect()
            debug('New connecttion: MongoDB Atlas')
        }
        debug("Reusing connection")
        const db = connection.db(Config.mongoDbname)
        resolve(db.collection(colletion))
    } catch (error) {
        reject(error)
    }
})