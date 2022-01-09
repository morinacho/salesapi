const {Response}     = require('../common/response')
const {UsersService} = require('./services')
const createError    = require('http-errors')
const debug          = require('debug')('app:users module')

module.exports.UsersController = {
    getUsers: async (req,res) => {
        try {
            let users = await UsersService.getAll()
            Response.success(res, 200, "Lista de usuarios", users)
        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },
    getUser: async(req,res) => {
        try {
            const {params: {id}} = req
            let user = await UsersService.getById(id)
            if(!user){
                Response.error(res, createError.NotFound())
            }
            else{
                Response.success(res, 200, `User ${id}`, user)
            }
        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },
    createUser:async (req,res) => {
        try {
            const {body} = req
            if(!body || Object.keys(body).length === 0){
                Response.error(res, new createError.BadRequest())
            }
            else{
                const insertId = await UsersService.create(body)
                Response.success(res, 201, 'User agregado', insertId)
            }
            
        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },
}