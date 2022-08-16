const express = require ('express')
const dataRoute = require('../Components/iphone');

const detailRouter = express.Router()
detailRouter.route("/iphone")
.get(dataRoute.apiController)
module.exports =detailRouter