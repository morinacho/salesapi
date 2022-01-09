const {MongoClient} = require('mongodb')
const {Config}      = require('../config/index')
const debug         = require('debug')('app:database')

var connection = null
module.exports.Database = (collection) => new Promise(async (resolve, reject) => {
    try {
        if(!connection){
            const client = new MongoClient(Config.mongoUri)
            connection = await client.connect()
            debug('New connection: MongoDB Atlas')
        }
        debug("Reusing connection")
        const db = connection.db(Config.mongoDbname)
        resolve(db.collection(collection))
    } catch (error) {
        reject(error)
    }
})