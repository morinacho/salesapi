const express = require('express')
const router  = express.Router()
const {UsersController} = require('./controller')

module.exports.UsersAPI = (app) => {
    router
        .get('/', UsersController.getUsers) 
        .get('/:id', UsersController.getUser)
        .delete('/:id', UsersController.deleteUser)
        .put(':id', UsersController.updateUser)
        .post('/', UsersController.createUser)
        
    app.use('/api/users', router)
}