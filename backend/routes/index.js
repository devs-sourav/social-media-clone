const express = require('express')
const _ = express.Router()
const apiRoutes = require("./api")
const api = process.env.BASE_API_URL


_.use(api,apiRoutes)

_.use(api,function(req,res){
    res.send("Api is not found")
})


module.exports = _