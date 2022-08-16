const express = require ('express')
const dataRoute = require('../Components/ipad');

const detailRouter = express.Router()
detailRouter.route("/ipad")
.get(dataRoute.apiController)
module.exports =detailRouter