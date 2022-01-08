const debug    = require('debug')('app:server')
const {Config} = require('./src/config/index')
const express  = require('express')

const {ProductsAPI} = require('./src/products/index')

const app = express()
ProductsAPI(app)

app.use(express.json())

app.listen(Config.port, () => {
    debug(`Server listen on port ${Config.port}`)
})