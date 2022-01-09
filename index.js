const express       = require('express')
const debug         = require('debug')('app:server')
const {Config}      = require('./src/config/index')
const {ProductsAPI} = require('./src/products/index')
const {UsersAPI}    = require('./src/users/index')

const app = express()
app.use(express.json())

ProductsAPI(app)
UsersAPI(app)


app.listen(Config.port, () => {debug(`Server listen on port ${Config.port}`)})