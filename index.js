const debug    = require('debug')('app:server')
const {Config} = require('./src/config/index')
const express  = require('express')


const app = express()

app.use(express.json())

app.listen(Config.port, () => {
    debug(`Server listen on port ${Config.port}`)
})