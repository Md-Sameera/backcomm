const express = require ('express')
const dataRoute = require('../Components/mac');

const detailRouter = express.Router()
detailRouter.route("/mac")
.get(dataRoute.apiController)
module.exports =detailRouter