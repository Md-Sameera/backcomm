const express = require ('express')
const dataRoute = require('../Components/bag');

const detailRouter = express.Router()
detailRouter.route("/bag")
.get(dataRoute.apiController)
module.exports =detailRouter