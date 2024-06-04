const express = require('express')
const _ = express.Router()
const authRoutes = require("./authRoute.js")

_.use("/auth",authRoutes)

module.exports = _