const express = require ('express')
const dataRoute = require('../Components/camera');

const detailRouter = express.Router()
detailRouter.route("/camera")
.get(dataRoute.apiController)
module.exports =detailRouter